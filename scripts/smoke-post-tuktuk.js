/**
 * One-off: POST /tuktuks with real JWT (creates temp SUPER_ADMIN, then deletes).
 * Run: node scripts/smoke-post-tuktuk.js
 * Requires DATABASE_URL + JWT_SECRET in .env
 */
require('dotenv').config();
const bcrypt = require('bcryptjs');
const request = require('supertest');
const createApp = require('../src/app');
const prisma = require('../src/config/prisma');

const EMAIL = 'smoke_tuktuk_check@local.test';
const PASS = 'SmokeTest123!';
const REG = 'SMOKE-WP-9999';

async function main() {
  const app = createApp();

  await prisma.tukTuk.deleteMany({ where: { registrationNumber: REG } }).catch(() => {});
  await prisma.user.deleteMany({ where: { email: EMAIL } }).catch(() => {});

  const hash = await bcrypt.hash(PASS, 10);
  await prisma.user.create({
    data: {
      name: 'Smoke Admin',
      email: EMAIL,
      password: hash,
      role: 'SUPER_ADMIN',
    },
  });

  const login = await request(app).post('/auth/login').send({ email: EMAIL, password: PASS });
  if (login.status !== 200) {
    console.error('Login failed', login.status, login.body);
    process.exitCode = 1;
    return;
  }
  const { token } = login.body;

  const station = await prisma.policeStation.findFirst();
  if (!station) {
    console.error('No police station in DB — run npm run seed first');
    process.exitCode = 1;
    return;
  }

  const res = await request(app)
    .post('/tuktuks')
    .set('Authorization', `Bearer ${token}`)
    .send({
      registrationNumber: REG,
      policeStationId: station.id,
      name: 'Smoke vehicle',
    });

  console.log('POST /tuktuks →', res.status);
  console.log(JSON.stringify(res.body, null, 2));

  await prisma.tukTuk.deleteMany({ where: { registrationNumber: REG } });
  await prisma.user.deleteMany({ where: { email: EMAIL } });
}

main()
  .catch((e) => {
    console.error(e);
    process.exitCode = 1;
  })
  .finally(() => prisma.$disconnect());
