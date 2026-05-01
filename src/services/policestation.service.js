const prisma = require('../config/prisma');

async function createPoliceStation(data) {
  const { name, districtId, address } = data;
  return prisma.policeStation.create({ data: { name, districtId: Number(districtId), address } });
}

async function listPoliceStations({ page = 1, limit = 25, districtId, provinceId } = {}, user) {
  const parsedPage = Math.max(1, Number(page) || 1);
  const parsedLimit = Math.min(100, Number(limit) || 25);
  const skip = (parsedPage - 1) * parsedLimit;

  const where = {};
  if (districtId) where.districtId = Number(districtId);
  if (provinceId) where.district = { provinceId: Number(provinceId) };

  // If user is POLICE, restrict to their district
  if (user && user.role === 'POLICE' && user.districtId) {
    where.districtId = Number(user.districtId);
  }

  const [data, total] = await Promise.all([
    prisma.policeStation.findMany({ where, skip, take: parsedLimit }),
    prisma.policeStation.count({ where }),
  ]);

  return { data, pagination: { page: parsedPage, limit: parsedLimit, total } };
}

async function getPoliceStationById(id, user) {
  const pk = Number(id);
  if (Number.isNaN(pk)) return null;

  const station = await prisma.policeStation.findUnique({ where: { id: pk }, include: { district: true } });
  if (!station) return null;

  if (user && user.role === 'POLICE' && user.districtId && station.districtId !== Number(user.districtId)) {
    return null; // not authorized to view
  }

  return station;
}

async function updatePoliceStation(id, data) {
  const pk = Number(id);
  if (Number.isNaN(pk)) return null;
  return prisma.policeStation.update({ where: { id: pk }, data });
}

async function deletePoliceStation(id) {
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
