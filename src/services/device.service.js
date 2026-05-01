const prisma = require('../config/prisma');
const crypto = require('crypto');

async function createDevice(data) {
  const { name, tukTukId } = data;
  const apiKey = crypto.randomBytes(32).toString('hex');

  return prisma.device.create({
    data: {
      name,
      apiKey,
      tukTukId,
    },
  });
}

async function listDevices(query = {}) {
  const where = {};
  if (query.tukTukId) where.tukTukId = Number(query.tukTukId);

  const page = Math.max(1, Number(query.page) || 1);
  const limit = Math.min(100, Number(query.limit) || 25);
  const skip = (page - 1) * limit;

  const [data, total] = await Promise.all([
    prisma.device.findMany({
      where,
      skip,
      take: limit,
      orderBy: { id: 'asc' },
      include: { tukTuk: true },
    }),
    prisma.device.count({ where }),
  ]);

  return { data, meta: { total, page, limit } };
}

async function getDeviceById(id) {
  const pk = Number(id);
  if (Number.isNaN(pk)) return null;
  return prisma.device.findUnique({
    where: { id: pk },
    include: { tukTuk: true },
  });
}

async function deleteDevice(id) {
  const pk = Number(id);
  if (Number.isNaN(pk)) return null;
  return prisma.device.delete({ where: { id: pk } });
}

module.exports = {
  createDevice,
  listDevices,
  getDeviceById,
  deleteDevice,
};
