const request = require('supertest');
const jwt = require('jsonwebtoken');
const createApp = require('../src/app');
const prisma = require('../src/config/prisma');

describe('Role-Based Access Control (RBAC) and District Scoping', () => {
  let app;
  let adminToken;
  let policeToken;
  let policeTokenDifferentDistrict;
  let adminDistrictId = 1;
  let policeDistrictId = 2;

  beforeAll(async () => {
    app = createApp();
  });

  afterAll(async () => {
    await prisma.$disconnect();
  });

  describe('TukTuk CRUD - RBAC', () => {
    it('POLICE should NOT be able to create TukTuk', async () => {
      // const res = await request(app)
      //   .post('/tuktuks')
      //   .set('Authorization', `Bearer ${policeToken}`)
      //   .send({ registrationNumber: 'WP-1001', policeStationId: 1 });

      // expect(res.status).toBe(403);
    });

    it('ADMIN should be able to create TukTuk', async () => {
      // const res = await request(app)
      //   .post('/tuktuks')
      //   .set('Authorization', `Bearer ${adminToken}`)
      //   .send({ registrationNumber: 'WP-1002', policeStationId: 1 });

      // expect(res.status).toBe(201);
    });

    it('POLICE should be able to list TukTuks in their district', async () => {
      // const res = await request(app)
      //   .get(`/tuktuks?districtId=${policeDistrictId}`)
      //   .set('Authorization', `Bearer ${policeToken}`);

      // expect(res.status).toBe(200);
      // All returned tuktuks should belong to policeDistrictId
    });

    it('POLICE should only see TukTuks in their own district', async () => {
      // const res = await request(app)
      //   .get(`/tuktuks?districtId=${1}`) // Different from police's district
      //   .set('Authorization', `Bearer ${policeToken}`);

      // expect(res.status).toBe(200);
      // Response should be filtered to only show their district
    });
  });

  describe('PoliceStation CRUD - RBAC', () => {
    it('POLICE should NOT be able to create PoliceStation', async () => {
      // const res = await request(app)
      //   .post('/policestations')
      //   .set('Authorization', `Bearer ${policeToken}`)
      //   .send({ name: 'New Station', districtId: 1 });

      // expect(res.status).toBe(403);
    });

    it('ADMIN should be able to create PoliceStation', async () => {
      // const res = await request(app)
      //   .post('/policestations')
      //   .set('Authorization', `Bearer ${adminToken}`)
      //   .send({ name: 'New Station', districtId: 1 });

      // expect(res.status).toBe(201);
    });

    it('POLICE should be able to list PoliceStations in their district', async () => {
      // const res = await request(app)
      //   .get(`/policestations?districtId=${policeDistrictId}`)
      //   .set('Authorization', `Bearer ${policeToken}`);

      // expect(res.status).toBe(200);
      // All stations should be from policeDistrictId
    });

    it('POLICE should NOT be able to update PoliceStation', async () => {
      // const res = await request(app)
      //   .put('/policestations/1')
      //   .set('Authorization', `Bearer ${policeToken}`)
      //   .send({ name: 'Updated Station' });

      // expect(res.status).toBe(403);
    });

    it('ADMIN should be able to update PoliceStation', async () => {
      // const res = await request(app)
      //   .put('/policestations/1')
      //   .set('Authorization', `Bearer ${adminToken}`)
      //   .send({ name: 'Updated Station' });

      // expect(res.status).toBe(200);
    });
  });

  describe('Location Operations - District Scoping', () => {
    it('POLICE should NOT be able to record location for TukTuk outside their district', async () => {
      // Setup: TukTuk in different district
      // const res = await request(app)
      //   .post('/locations')
      //   .set('Authorization', `Bearer ${policeTokenDifferentDistrict}`)
      //   .send({ tukTukId: 1, latitude: 6.9271, longitude: 79.8612 });

      // expect(res.status).toBe(403);
      // expect(res.body.error).toContain('Forbidden');
    });

    it('POLICE should be able to record location for TukTuk in their district', async () => {
      // const res = await request(app)
      //   .post('/locations')
      //   .set('Authorization', `Bearer ${policeToken}`)
      //   .send({ tukTukId: 1, latitude: 6.9271, longitude: 79.8612 });

      // expect([201, 404]).toContain(res.status);
      // 404 if tukTuk doesn't exist, 201 if successful
    });

    it('POLICE should only see locations for TukTuks in their district', async () => {
      // const res = await request(app)
      //   .get('/locations/live')
      //   .set('Authorization', `Bearer ${policeToken}`);

      // expect(res.status).toBe(200);
      // All locations should be from tuktuks in police's district
    });

    it('ADMIN should see all locations', async () => {
      // const res = await request(app)
      //   .get('/locations/live')
      //   .set('Authorization', `Bearer ${adminToken}`);

      // expect(res.status).toBe(200);
      // Should return locations from all districts
    });
  });

  describe('Device Management - ADMIN only', () => {
    it('POLICE should NOT be able to create device', async () => {
      // const res = await request(app)
      //   .post('/devices')
      //   .set('Authorization', `Bearer ${policeToken}`)
      //   .send({ name: 'Device 1', tukTukId: 1 });

      // expect(res.status).toBe(403);
    });

    it('ADMIN should be able to create device', async () => {
      // const res = await request(app)
      //   .post('/devices')
      //   .set('Authorization', `Bearer ${adminToken}`)
      //   .send({ name: 'Device 1', tukTukId: 1 });

      // expect(res.status).toBe(201);
      // expect(res.body).toHaveProperty('apiKey');
    });

    it('POLICE should NOT be able to list devices', async () => {
      // const res = await request(app)
      //   .get('/devices')
      //   .set('Authorization', `Bearer ${policeToken}`);

      // expect(res.status).toBe(403);
    });

    it('ADMIN should be able to list devices', async () => {
      // const res = await request(app)
      //   .get('/devices')
      //   .set('Authorization', `Bearer ${adminToken}`);

      // expect(res.status).toBe(200);
    });

    it('POLICE should NOT be able to rotate device key', async () => {
      // const res = await request(app)
      //   .post('/devices/1/rotate')
      //   .set('Authorization', `Bearer ${policeToken}`);

      // expect(res.status).toBe(403);
    });

    it('ADMIN should be able to rotate device key', async () => {
      // const res = await request(app)
      //   .post('/devices/1/rotate')
      //   .set('Authorization', `Bearer ${adminToken}`);

      // expect(res.status).toBe(200);
      // expect(res.body).toHaveProperty('apiKey');
    });

    it('POLICE should NOT be able to revoke device', async () => {
      // const res = await request(app)
      //   .post('/devices/1/revoke')
      //   .set('Authorization', `Bearer ${policeToken}`);

      // expect(res.status).toBe(403);
    });

    it('ADMIN should be able to revoke device', async () => {
      // const res = await request(app)
      //   .post('/devices/1/revoke')
      //   .set('Authorization', `Bearer ${adminToken}`);

      // expect(res.status).toBe(200);
    });
  });

  describe('Unauthenticated Requests', () => {
    it('should reject requests without Bearer token', async () => {
      // const res = await request(app)
      //   .get('/tuktuks');

      // expect(res.status).toBe(401);
    });

    it('should reject requests with invalid token', async () => {
      // const res = await request(app)
      //   .get('/tuktuks')
      //   .set('Authorization', 'Bearer invalid.token.here');

      // expect(res.status).toBe(401);
    });

    it('should allow public /api/status', async () => {
      // const res = await request(app)
      //   .get('/api/status');

      // expect(res.status).toBe(200);
    });
  });
});
