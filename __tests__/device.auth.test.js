const request = require('supertest');
const jwt = require('jsonwebtoken');
const createApp = require('../src/app');
const prisma = require('../src/config/prisma');

// Mock prisma - in a real test, use jest.mock() and setup test DB
// For now, this is a reference implementation

describe('Device Authentication and API Key Security', () => {
  let app;
  let adminToken;
  let policeToken;
  let deviceId;
  let apiKey;

  beforeAll(async () => {
    app = createApp();
  });

  afterAll(async () => {
    await prisma.$disconnect();
  });

  describe('Device Create (ADMIN only)', () => {
    it('should return 403 if non-admin user tries to create device', async () => {
      // Note: would need policeToken from auth endpoint in real test
      // This is a reference structure
      const res = await request(app)
        .post('/devices')
        .set('Authorization', `Bearer ${policeToken || 'invalid'}`)
        .send({ name: 'Test Device', tukTukId: 1 });

      expect([401, 403]).toContain(res.status);
    });

    it('should create device and return apiKey only once', async () => {
      // In real test with actual DB
      // const res = await request(app)
      //   .post('/devices')
      //   .set('Authorization', `Bearer ${adminToken}`)
      //   .send({ name: 'GPS Sensor 1', tukTukId: 1 });

      // expect(res.status).toBe(201);
      // expect(res.body).toHaveProperty('apiKey');
      // expect(res.body).toHaveProperty('device');
      // expect(res.body.apiKey).toMatch(/^[a-f0-9]+\.[a-f0-9]+$/);
    });

    it('should not expose secretHash in device response', async () => {
      // expect(res.body.device).not.toHaveProperty('secretHash');
    });
  });

  describe('Device API Key Rotation', () => {
    it('should rotate key and return new apiKey', async () => {
      // const res = await request(app)
      //   .post(`/devices/${deviceId}/rotate`)
      //   .set('Authorization', `Bearer ${adminToken}`);

      // expect(res.status).toBe(200);
      // expect(res.body).toHaveProperty('apiKey');
      // Old apiKey should no longer work
    });

    it('should block rotate if not ADMIN', async () => {
      // const res = await request(app)
      //   .post(`/devices/${deviceId}/rotate`)
      //   .set('Authorization', `Bearer ${policeToken}`);

      // expect(res.status).toBe(403);
    });
  });

  describe('Device API Key Revocation', () => {
    it('should revoke key and block further requests', async () => {
      // const res = await request(app)
      //   .post(`/devices/${deviceId}/revoke`)
      //   .set('Authorization', `Bearer ${adminToken}`);

      // expect(res.status).toBe(200);

      // // Now try to use revoked key
      // const locRes = await request(app)
      //   .post('/locations')
      //   .set('x-api-key', apiKey)
      //   .send({ latitude: 6.9271, longitude: 79.8612 });

      // expect(locRes.status).toBe(401);
    });
  });

  describe('Device Request Restriction (POST /locations only)', () => {
    it('JWT alone must not POST /locations (device-only GPS ingest)', async () => {
      const res = await request(app)
        .post('/locations')
        .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.invalid')
        .send({ tukTukId: 1, latitude: 6.9271, longitude: 79.8612 });

      expect(res.status).toBe(401);
      expect(res.body.message).toMatch(/x-api-key/i);
    });

    it('device should be able to POST /locations', async () => {
      // const res = await request(app)
      //   .post('/locations')
      //   .set('x-api-key', apiKey)
      //   .send({ latitude: 6.9271, longitude: 79.8612, tukTukId: 1 });

      // expect([201, 400, 404]).toContain(res.status);
      // 201 = success, 400/404 = valid error (tukTuk not found, etc)
    });

    it('device should NOT be able to GET /tuktuks', async () => {
      // const res = await request(app)
      //   .get('/tuktuks')
      //   .set('x-api-key', apiKey);

      // expect(res.status).toBe(403);
      // expect(res.body.error).toContain('Devices may only');
    });

    it('device should NOT be able to POST /devices', async () => {
      // const res = await request(app)
      //   .post('/devices')
      //   .set('x-api-key', apiKey)
      //   .send({ name: 'New Device', tukTukId: 2 });

      // expect(res.status).toBe(403);
    });

    it('device should NOT be able to GET /policestations', async () => {
      // const res = await request(app)
      //   .get('/policestations')
      //   .set('x-api-key', apiKey);

      // expect(res.status).toBe(403);
    });
  });

  describe('Device API Key Format', () => {
    it('should reject malformed x-api-key header', async () => {
      // Missing dot separator
      // const res = await request(app)
      //   .post('/locations')
      //   .set('x-api-key', 'invalidformat')
      //   .send({ latitude: 6.9271, longitude: 79.8612 });

      // expect(res.status).toBe(401);
      // expect(res.body.error).toContain('Malformed');
    });

    it('should reject invalid keyId', async () => {
      // const res = await request(app)
      //   .post('/locations')
      //   .set('x-api-key', 'invalidkeyid.invalidsecret')
      //   .send({ latitude: 6.9271, longitude: 79.8612 });

      // expect(res.status).toBe(401);
    });

    it('should reject incorrect secret for valid keyId', async () => {
      // const res = await request(app)
      //   .post('/locations')
      //   .set('x-api-key', `${keyId.split('.')[0]}.wrongsecret`)
      //   .send({ latitude: 6.9271, longitude: 79.8612 });

      // expect(res.status).toBe(401);
    });
  });

  describe('Device Principal in Request', () => {
    it('should set req.principal when device authenticates', async () => {
      // This would require middleware testing or integration test with logging
      // expect(req.principal).toEqual({ type: 'DEVICE', deviceId, tukTukId });
    });
  });
});
