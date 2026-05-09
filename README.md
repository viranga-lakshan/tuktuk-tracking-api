# TukTuk Tracking API (Sri Lanka Police)

| | |
|--|--|
| **NIBM Index** | COBSCCOMP242P-068 |
| **Coventry Index** | 16116029 |

Node.js + Express + Prisma (PostgreSQL) API with JWT for staff, API keys for on-vehicle devices, and role-based geographic scope.

**Base URL (local):** `http://localhost:3000`  
**OpenAPI / Swagger UI:** `http://localhost:3000/api/docs` (spec: `src/config/swagger.js`, version **1.3.0**)

- Human users: `Authorization: Bearer <access_token>`
- Devices: `x-api-key: <keyId>.<secret>` — **only** `POST /locations` (path must be `/locations`, plural)

---

## User guide — setup and run

### Prerequisites

- **Node.js** 20.x or newer (`node -v`)
- **PostgreSQL** database (e.g. [Neon](https://neon.tech), RDS, or local Postgres)
- **Git** (to clone the repository)

### 1. Clone and install dependencies

```bash
git clone https://github.com/viranga-lakshan/tuktuk-tracking-api.git
cd tuktuk-tracking-api
npm install
```

### 2. Configure environment variables

Copy the example file and edit values:

```bash
copy .env.example .env
```

On macOS/Linux:

```bash
cp .env.example .env
```

**Required in `.env`:**

| Variable | Description |
|----------|-------------|
| `DATABASE_URL` | PostgreSQL connection string (SSL usually required for Neon) |
| `JWT_SECRET` | Long random secret for signing JWTs — generate with: `node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"` |

**Optional:** `PORT` (default `3000`), `JWT_EXPIRES_IN`, `NODE_ENV`, `AUTH_RATE_LIMIT_MAX`, etc. See the [Environment](#environment) table below.

**Documented SUPER_ADMIN credentials (for Postman / coursework):**  
The API does **not** read these variables automatically; they are the intended login after you create the user in the database (next sections).

| Variable | Value |
|----------|--------|
| `SUPER_ADMIN_EMAIL` | `superadmin@postman.test` |
| `SUPER_ADMIN_PASSWORD` | `PostmanTest2026!` |

Keep `.env` out of version control; it is already listed in `.gitignore`.

### 3. Create database schema

```bash
npx prisma migrate deploy
npx prisma generate
```

For local development with new migrations:

```bash
npx prisma migrate dev
```

### 4. Optional demo data (geography, tuk-tuks, locations)

This **deletes** existing `Location`, `TukTuk`, and related geography seed tables and repopulates them. **It does not create users.** If you already have users linked to districts or stations, review `prisma/seed.js` before running on production.

```bash
npm run seed
```

### 5. Create the SUPER_ADMIN user

There is **no** public registration endpoint. After migrations, create one `SUPER_ADMIN` row using the email/password above.

**Option A — Prisma Studio**

```bash
npx prisma studio
```

Open the `User` model, add a record: `name`, `email` = `superadmin@postman.test`, `role` = `SUPER_ADMIN`, `password` = **bcrypt hash** of `PostmanTest2026!` (not the plain text). Generate the hash:

```bash
node -e "require('bcryptjs').hash('PostmanTest2026!', 10).then(console.log)"
```

Paste the hash into the `password` field. Leave `provinceId`, `districtId`, and `stationId` empty for national scope.

**Option B — SQL (Neon / psql)**

Replace `<BCRYPT_HASH>` with the output of the command above:

```sql
INSERT INTO "User" ("name", "email", "password", "role", "createdAt", "updatedAt")
VALUES (
  'Super Admin',
  'superadmin@postman.test',
  '<BCRYPT_HASH>',
  'SUPER_ADMIN',
  NOW(),
  NOW()
);
```

If the user already exists, update the password hash instead of inserting.

### 6. Run the API

```bash
npm start
```

You should see the server listening on the configured port (default **3000**).

**Smoke checks**

- Browser or curl: `GET http://localhost:3000/api/status`
- Swagger UI: `http://localhost:3000/api/docs`
- Login: `POST http://localhost:3000/auth/login` with JSON body:

```json
{
  "email": "superadmin@postman.test",
  "password": "PostmanTest2026!"
}
```

Use the returned `token` as `Authorization: Bearer <token>` for protected routes.

### 7. Run tests

```bash
npm test
```

Watch mode:

```bash
npm run test:watch
```

---

## Environment

| Variable | Required | Description |
|----------|----------|-------------|
| `DATABASE_URL` | Yes | PostgreSQL connection string |
| `JWT_SECRET` | Yes | Secret for signing JWTs |
| `JWT_EXPIRES_IN` | No | Default `7d` |
| `PORT` | No | Default `3000` |
| `AUTH_RATE_LIMIT_MAX` | No | Failed login / user-create attempts per IP per window: default **200** in development, **5** in production (`NODE_ENV=production`) |
| `SKIP_PRISMA_GENERATE` | No | If your workflow uses it: skip automatic `prisma generate` where applicable |
| `SUPER_ADMIN_EMAIL` | No | Documented default: `superadmin@postman.test` (create user in DB manually) |
| `SUPER_ADMIN_PASSWORD` | No | Documented default for coursework: `PostmanTest2026!` (create user in DB manually) |

---

## Roles

Defined in `src/constants/roles.js`. Geographic fields must match the role (see `user.service.js`).

| Role | Scope |
|------|--------|
| `ADMIN` | National — no geographic fields (legacy; similar to super admin for scope) |
| `SUPER_ADMIN` | National — no geographic fields on user |
| `PROVINCE_ADMIN` | `provinceId` required |
| `DISTRICT_ADMIN` | `districtId` required |
| `STATION_ADMIN` | `stationId` required |
| `POLICE` | Exactly **one** of `provinceId`, `districtId`, or `stationId` |

**`ADMIN_ROLES`** (can manage devices, delete tuk tuks, etc., per route): `ADMIN`, `SUPER_ADMIN`, `PROVINCE_ADMIN`, `DISTRICT_ADMIN`, `STATION_ADMIN` — **not** `POLICE`.

Devices are **not** users: they use `x-api-key` and may only call **`POST /locations`**.

---

## API routes (summary)

Mounts from `src/app.js`: `/api` (status), `/auth`, `/users`, `/devices`, `/policestations`, and **root** `/tuktuks`, `/locations`.

### System

| Method | Path | Auth | Description |
|--------|------|------|-------------|
| GET | `/api/status` | None | Health / status |

### Auth

| Method | Path | Auth | Description |
|--------|------|------|-------------|
| POST | `/auth/login` | None | Body: `{ "email", "password" }` → `{ user, token }` |
| POST | `/auth/logout` | Bearer | Revokes current JWT (`jti`) until expiry |
| GET | `/auth/me` | Bearer | Current JWT payload / user |
| GET | `/auth/admin` | Bearer | **Admin roles only** (same set as `ADMIN_ROLES`); `POLICE` → 403 |

### Users (no `/auth/register`)

| Method | Path | Auth | Description |
|--------|------|------|-------------|
| GET | `/users` | Bearer | All human roles; list scoped by RBAC |
| GET | `/users/:id` | Bearer | All human roles; scoped |
| POST | `/users` | Bearer | **`ADMIN_ROLES` only** — create user per hierarchy |
| PATCH | `/users/:id` | Bearer | All human roles; service enforces allowed changes |
| DELETE | `/users/:id` | Bearer | **`ADMIN_ROLES` only** |

**List query:** `provinceId`, `districtId`, `stationId`, `page`, `limit`

**Create example (province admin)**

```json
{
  "name": "Province Officer",
  "email": "province@example.com",
  "password": "Secret123!",
  "role": "PROVINCE_ADMIN",
  "provinceId": 1
}
```

**Create example (police, station scope)**

```json
{
  "name": "Beat Officer",
  "email": "police@example.com",
  "password": "Secret123!",
  "role": "POLICE",
  "stationId": 1
}
```

### Police stations

**`SUPER_ADMIN` only** (enforced in service).

| Method | Path | Auth | Description |
|--------|------|------|-------------|
| POST | `/policestations` | Bearer | Create |
| GET | `/policestations` | Bearer | List; query: `provinceId`, `districtId`, `page`, `limit` (max limit 100) |
| GET | `/policestations/:id` | Bearer | Detail |
| PUT | `/policestations/:id` | Bearer | Update |
| DELETE | `/policestations/:id` | Bearer | Delete (**204** No Content) |

### TukTuks (root paths)

| Method | Path | Auth | Description |
|--------|------|------|-------------|
| POST | `/tuktuks` | Bearer | **`ADMIN_ROLES` only** (not `POLICE`); station must be in scope |
| GET | `/tuktuks` | Bearer | **All human roles**; optional geo filters (role rules apply; see below) |
| GET | `/tuktuks/:id` | Bearer | **All human roles**; includes latest location + devices when in scope |
| PATCH | `/tuktuks/:id` | Bearer | **`ADMIN_ROLES` only** |
| DELETE | `/tuktuks/:id` | Bearer | **`ADMIN_ROLES` only** |

**List query:** `provinceId`, `districtId`, `policeStationId`, `page`, `limit` — filters are **AND**-ed. **`SUPER_ADMIN` / `ADMIN`:** all three if used, must match one hierarchy. **`PROVINCE_ADMIN`:** `districtId` and/or `policeStationId` (no `provinceId`). **`DISTRICT_ADMIN`:** `policeStationId` only. **`STATION_ADMIN` / `POLICE`:** do not send geo filters (400).

**Create body**

```json
{
  "registrationNumber": "WP-0001",
  "policeStationId": 1,
  "name": "Optional label"
}
```

**PATCH body (optional fields)**

```json
{
  "registrationNumber": "WP-0002",
  "policeStationId": 2,
  "name": "Updated name"
}
```

### Locations (root paths; use **`/locations`** plural)

| Method | Path | Auth | Description |
|--------|------|------|-------------|
| POST | `/locations` | **`x-api-key` only** | Record GPS. Body: `latitude`, `longitude` (optional `recordedAt`). Vehicle comes from the device binding; staff JWT is **not** accepted. |
| GET | `/locations` | Bearer | Same as **live** list (latest point per tuk-tuk) |
| GET | `/locations/live` | Bearer | Latest point per tuk-tuk; same query filters as list |
| GET | `/locations/live/:tukTukId` | Bearer | Single vehicle’s latest point |
| GET | `/locations/history` | Bearer | Paged history; query: geo filters, `tukTukId`, `recordedAtFrom`, `recordedAtTo`, `page`, `limit` |
| GET | `/locations/history/:tukTukId` | Bearer | History for one vehicle (path id overrides query `tukTukId`) |

**Device POST example**

```http
POST /locations
x-api-key: <keyId>.<secret>
Content-Type: application/json

{
  "latitude": 6.9271,
  "longitude": 79.8612
}
```

### Devices

**`ADMIN_ROLES` only** (not `POLICE`).

| Method | Path | Auth | Description |
|--------|------|------|-------------|
| POST | `/devices` | Bearer | Create; returns `apiKey` once |
| GET | `/devices` | Bearer | List; **`tukTukId`**, **`page`**, **`limit`** drive filtering (other query keys may pass validation but are ignored) |
| GET | `/devices/:id` | Bearer | Detail |
| DELETE | `/devices/:id` | Bearer | Delete (**200** JSON with message) |
| POST | `/devices/:id/rotate` | Bearer | New `apiKey` once |
| POST | `/devices/:id/revoke` | Bearer | Revoke key |

---

## Swagger / OpenAPI

- UI: **`http://localhost:3000/api/docs`**
- Source: **`src/config/swagger.js`** (OpenAPI **3.0.3**, path groups aligned with routes)

---

## Database migrations

```bash
npx prisma migrate deploy
```

Development:

```bash
npx prisma migrate dev
```

If the database was changed outside migration files, resolve drift (backup, `prisma migrate resolve`, or reset a dev DB) before deploying.

---

## Scripts

| Command | Purpose |
|---------|---------|
| `npm start` | Run API (`node server.js`) |
| `npm run seed` | Seed provinces/districts/stations/tuktuks/locations (wipes those tables; **does not** create users) |
| `npm test` | Jest (`__tests__/`) |
| `npm run test:watch` | Jest watch mode |

---

## Troubleshooting

**Login returns `Value 'SUPER_ADMIN' not found in enum 'Role'`**

That usually means an **old Prisma Client** or DB mismatch. In this repo **`User.role`** is **`String`** in `prisma/schema.prisma`.

1. Work from project root
2. Run: `npx prisma migrate deploy` then `npx prisma generate`
3. Restart all Node processes for this app, then `npm start`
4. If it persists: remove `node_modules`, `npm install`, `npx prisma generate`

---

## Security notes

- Passwords: bcrypt. Device secrets: bcrypt-hashed; raw key shown once on create/rotate.
- JWT logout: in-memory revocation by `jti` until token expiry (single process; see `src/utils/revoked-jwt.js`).
- Rate limits: `/auth`, `/users`, and location routes (see `src/middleware/rate-limit.middleware.js`).
- `helmet`, `cors`, and global error handler in `src/app.js`.
- Device + JSON: `GET`/`HEAD` skip `express.json()` so empty JSON bodies on GET do not error (Postman).

Change the documented **SUPER_ADMIN** password in production and rotate `JWT_SECRET`.

More detail: **`SECURITY_IMPLEMENTATION.md`**.
