# Device Security Implementation & Verification Guide

This document summarizes the security enhancements made to the TukTuk Tracking API and provides step-by-step verification instructions.

## What Was Implemented

### 1. **Secure Device API Key Storage**
- Device API keys are no longer stored in plaintext
- Format: `<keyId>.<secret>` (where `keyId` is public, `secret` is hashed)
- Storage: Only `keyId` and bcrypt-hashed `secret` are stored in the database
- Verification: `bcrypt.compare()` verifies incoming secrets against stored hashes

### 2. **Prisma Schema Updates**
Updated `Device` model in `prisma/schema.prisma`:
```prisma
model Device {
  id        Int      @id @default(autoincrement())
  name      String
  keyId     String   @unique        // Public identifier
  secretHash String               // Hashed secret
  tukTukId  Int
  tukTuk    TukTuk   @relation(fields: [tukTukId], references: [id])
  isRevoked Boolean  @default(false)  // Revocation flag
  rotatedAt DateTime?              // Last rotation timestamp
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  @@index([keyId])
  @@index([tukTukId])
}
```

### 3. **Device Lifecycle Endpoints**
- **POST /devices** (`ADMIN_ROLES`: `ADMIN`, `SUPER_ADMIN`, `PROVINCE_ADMIN`, `DISTRICT_ADMIN`, `STATION_ADMIN`) — Create device, returns raw `apiKey` once
- **POST /devices/:id/rotate** (same roles) — Rotate key, returns new raw `apiKey` once
- **POST /devices/:id/revoke** (same roles) — Revoke key, blocks access
- **DELETE /devices/:id** (same roles) — Remove device; audit `DEVICE_DELETED`

### 4. **Device Request Restriction**
- Devices authenticated via `x-api-key` header can **ONLY** access `POST /locations`
- All other routes return 403 Forbidden with message: "Devices may only POST /locations"
- Global middleware enforces this restriction early in request pipeline

### 5. **Device Authentication Middleware**
- `src/middleware/device.middleware.js` — `verifyApiKeyHeader`, optional `authenticateDevice`
- `src/app.js` (global): when `x-api-key` is present, verifies device and sets **`req.device`**, **`req.tukTukId`**, and **`req.principal = { type: 'DEVICE', deviceId, tukTukId }`** so `POST /locations` can bind GPS to the device’s tuk-tuk without a body `tukTukId`
- Validates header format: `x-api-key: <keyId>.<secret>`
- Checks `isRevoked`; verifies secret with `bcrypt.compare()`

### 6. **Audit Logging**
- `src/middleware/audit.middleware.js` — attaches `req.audit(action, details)`
- Events used in controllers: `DEVICE_CREATED`, `DEVICE_DELETED`, `DEVICE_KEY_ROTATED`, `DEVICE_KEY_REVOKED`
- Format: JSON lines in `logs/audit.log`
- Fields: timestamp, actor, action, details

### 7. **Test Suite**
- `__tests__/device.auth.test.js` - Device authentication tests
- `__tests__/rbac.test.js` - Role-based access control tests
- Reference implementations for mocking and verification

---

## Local Setup & Verification

### Step 1: Install Dependencies
```bash
npm install
```

This installs Jest and Supertest for testing (already in devDependencies).

### Step 2: Run Prisma Migrations
**CRITICAL**: Apply migrations before starting the server.

```bash
npx prisma migrate deploy
npx prisma generate
```

(Use `npx prisma migrate dev` in local development when creating new migrations.)

### Step 3: Seed Database (Optional)
```bash
npm run seed
```

This creates 9 provinces, 25 districts, 20 police stations, 200 tuk-tuks, and 1 week of location history.

### Step 4: Start Server
```bash
npm start
```

Expected log line:
```
TukTuk Tracking API listening on port 3000
```

---

## Testing & Verification

### Manual Testing

#### 1. Create a Device (admin-tier JWT)

**Step 1a**: Login as a user with an **`ADMIN_ROLES`** role (not `POLICE`)
```bash
curl -X POST http://localhost:3000/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@example.com","password":"AdminPassword123"}' \
  | jq .token
```
Copy the token value (e.g., `eyJhbGc...`)

**Step 1b**: Create a device
```bash
curl -X POST http://localhost:3000/devices \
  -H "Authorization: Bearer <ADMIN_TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{"name":"GPS Sensor 1","tukTukId":1}' \
  | jq .
```

Expected response:
```json
{
  "device": {
    "id": 1,
    "name": "GPS Sensor 1",
    "keyId": "a1b2c3d4e5f6...",
    "tukTukId": 1,
    "isRevoked": false,
    "createdAt": "2026-05-01T...",
    "updatedAt": "2026-05-01T..."
  },
  "apiKey": "a1b2c3d4e5f6....abcdef123456"
}
```

⚠️ **IMPORTANT**: Save the `apiKey` value. It's returned only once!

#### 2. Verify Device Can POST /locations

```bash
curl -X POST http://localhost:3000/locations \
  -H "x-api-key: <SAVED_API_KEY>" \
  -H "Content-Type: application/json" \
  -d '{"latitude":6.9271,"longitude":79.8612}'
```

Expected: 201 Created (or 404 if tukTukId doesn't exist - both are valid)

#### 3. Verify Device CANNOT Access Other Routes

```bash
# Should return 403
curl -X GET http://localhost:3000/tuktuks \
  -H "x-api-key: <SAVED_API_KEY>"

# Should return 403
curl -X POST http://localhost:3000/devices \
  -H "x-api-key: <SAVED_API_KEY>" \
  -H "Content-Type: application/json" \
  -d '{"name":"New Device","tukTukId":2}'
```

Expected: 403 Forbidden

#### 4. Rotate Device Key

```bash
curl -X POST http://localhost:3000/devices/1/rotate \
  -H "Authorization: Bearer <ADMIN_TOKEN>" \
  | jq .apiKey
```

Expected: New apiKey string. Old apiKey will no longer work.

#### 5. Revoke Device Key

```bash
curl -X POST http://localhost:3000/devices/1/revoke \
  -H "Authorization: Bearer <ADMIN_TOKEN>"
```

Then try to use the old apiKey:
```bash
curl -X POST http://localhost:3000/locations \
  -H "x-api-key: <OLD_API_KEY>" \
  -H "Content-Type: application/json" \
  -d '{"latitude":6.9271,"longitude":79.8612}'
```

Expected: 401 Unauthorized with message: "API key revoked"

### Automated Testing

```bash
npm test
```

This runs all tests in `__tests__/` directory using Jest.

**Current state**: Many cases in `__tests__` are structural or commented; `npm test` still runs the suite against your environment. For full integration tests, use a dedicated test DB and uncomment/extend assertions.

---

## Audit Logging

Audit logs are written to `logs/audit.log` (created on first event).

Example log entry:
```json
{"timestamp":"2026-05-01T10:30:45.123Z","actor":"admin@example.com","action":"DEVICE_CREATED","details":{"deviceId":1,"name":"GPS Sensor 1","tukTukId":1}}
{"timestamp":"2026-05-01T10:31:20.456Z","actor":"admin@example.com","action":"DEVICE_KEY_ROTATED","details":{"deviceId":1}}
{"timestamp":"2026-05-01T10:32:00.789Z","actor":"admin@example.com","action":"DEVICE_KEY_REVOKED","details":{"deviceId":1}}
```

To view logs:
```bash
cat logs/audit.log | jq .
```

---

## Security Checklist

- [x] Device API keys stored as bcrypt hash, not plaintext
- [x] `keyId` and `secret` separated (keyId is lookup key, secret is hashed)
- [x] Device requests restricted to `POST /locations` only
- [x] `isRevoked` flag prevents revoked keys from use
- [x] `rotatedAt` timestamp tracks key rotations
- [x] `req.principal` and `req.tukTukId` set for device requests (see `app.js`)
- [x] Audit logging for device create/delete/rotate/revoke
- [x] RBAC: device routes require `ADMIN_ROLES`; `POLICE` cannot manage devices
- [x] Test structure in place (reference implementations)

---

## Environment Variables (required)

```
DATABASE_URL=postgresql://USER:PASSWORD@HOST/DB?sslmode=require
JWT_SECRET=<randomly-generated-secret>
```

Generate JWT_SECRET:
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

---

## Deployment Notes

### Local Development
```bash
npm install
npx prisma migrate dev
npm run seed
npm start
```

### Production / CI
```bash
npm ci
npx prisma migrate deploy
npm start
```

**Important**: In production, ensure:
- `.env` file is never committed
- Environment variables are set via deployment platform (Render, Railway, etc.)
- Database backups are configured
- SSL/TLS for database connections is enforced

---

## Files Modified/Created

### Modified
- `prisma/schema.prisma` - Added keyId, secretHash, isRevoked, rotatedAt
- `src/app.js` - Added audit middleware and device authenticator
- `src/middleware/device.middleware.js` - Secure device auth with bcrypt
- `src/services/device.service.js` - Key hashing, rotation, revocation
- `src/controllers/device.controller.js` - Audit logging; delete returns JSON **200**
- `src/routes/device.routes.js` - Added rotate/revoke endpoints
- `src/config/swagger.js` - Documented device endpoints and x-api-key
- `README.md` - API overview and endpoint list
- `package.json` - Jest / Supertest devDependencies; `npm test` script

### Created
- `src/middleware/audit.middleware.js` - Audit logging middleware
- `__tests__/device.auth.test.js` - Device authentication tests
- `__tests__/rbac.test.js` - RBAC tests
- `jest.config.js` - Jest configuration

---

## Troubleshooting

### "API key is required (x-api-key header)"
- Device request missing `x-api-key` header
- Use: `curl -H "x-api-key: <keyId>.<secret>"`

### "Malformed API key"
- Header format is wrong (no dot)
- Correct format: `<keyId>.<secret>` (exactly one dot)

### "Invalid API key"
- `keyId` not found in database or secret doesn't match
- Verify you copied the full apiKey from create/rotate response

### "API key revoked"
- Device key was explicitly revoked
- Create new device or contact ADMIN to re-enable

### "Devices may only POST /locations"
- Device tried to access non-/locations endpoint
- Device authentication is working; restriction is intentional

### "Prisma Client needs to be regenerated"
- Run: `npx prisma generate`

---

## Next Steps (Optional Enhancements)

1. **Device Key Expiration**: Add `expiresAt` field and automatic revocation
2. **Rate Limiting per Device**: Track requests by deviceId
3. **Structured Logging**: Use Winston or Pino for better log management
4. **Monitoring**: Alert on excessive failed authentication attempts
5. **Key Rotation Policy**: Enforce periodic key rotation
6. **HSM Integration**: Store master key in Hardware Security Module
7. **Audit Log Retention**: Implement log retention and archival policies

---

## Support

For issues or questions:
1. Check `logs/audit.log` for recent activity
2. Verify `.env` contains `DATABASE_URL` and `JWT_SECRET`
3. Ensure Prisma migrations are applied: `npx prisma migrate status`
4. Check database connectivity: `npx prisma db execute --stdin < test.sql`

