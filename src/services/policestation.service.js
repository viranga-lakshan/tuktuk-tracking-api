const prisma = require('../config/prisma');

/** Enforce SUPER_ADMIN using DB role (not JWT alone). */
async function assertSuperAdmin(user) {
  if (!user || user.id == null) {
    const err = new Error('Authentication required');
    err.statusCode = 401;
    throw err;
  }

  const row = await prisma.user.findUnique({
    where: { id: Number(user.id) },
    select: { role: true },
  });

  if (!row) {
    const err = new Error('User not found');
    err.statusCode = 401;
    throw err;
  }

  const role = String(row.role || '').trim();
  if (role !== 'SUPER_ADMIN') {
    const err = new Error('Forbidden: only SUPER_ADMIN may access police stations');
    err.statusCode = 403;
    throw err;
  }
}

async function createPoliceStation(data, user) {
  await assertSuperAdmin(user);
  const { name, districtId, address } = data;
  return prisma.policeStation.create({ data: { name, districtId: Number(districtId), address } });
}

async function listPoliceStations({ page = 1, limit = 25, districtId, provinceId } = {}, user) {
  await assertSuperAdmin(user);

  const parsedPage = Math.max(1, Number(page) || 1);
  const parsedLimit = Math.min(100, Number(limit) || 25);
  const skip = (parsedPage - 1) * parsedLimit;

  const where = {};
  if (districtId) where.districtId = Number(districtId);
  if (provinceId) where.district = { provinceId: Number(provinceId) };

  const [data, total] = await Promise.all([
    prisma.policeStation.findMany({ where, skip, take: parsedLimit }),
    prisma.policeStation.count({ where }),
  ]);

  return { data, pagination: { page: parsedPage, limit: parsedLimit, total } };
}

async function getPoliceStationById(id, user) {
  await assertSuperAdmin(user);

  const pk = Number(id);
  if (Number.isNaN(pk)) return null;

  const station = await prisma.policeStation.findUnique({ where: { id: pk }, include: { district: true } });
  if (!station) return null;

  return station;
}

async function updatePoliceStation(id, data, user) {
  await assertSuperAdmin(user);
  const pk = Number(id);
  if (Number.isNaN(pk)) return null;
  return prisma.policeStation.update({ where: { id: pk }, data });
}

async function deletePoliceStation(id, user) {
  await assertSuperAdmin(user);
  const pk = Number(id);
  if (Number.isNaN(pk)) return null;
  return prisma.policeStation.delete({ where: { id: pk } });
}

module.exports = {
  createPoliceStation,
  listPoliceStations,
  getPoliceStationById,
  updatePoliceStation,
  deletePoliceStation,
};
