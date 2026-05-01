const prisma = require('../config/prisma');
const crypto = require('crypto');
const bcrypt = require('bcryptjs');

const SALT_ROUNDS = 10;

// Create device and return raw API key token once: <keyId>.<secret>
async function createDevice(data) {
  const { name, tukTukId } = data;
  const rawSecret = crypto.randomBytes(32).toString('hex');
  const secretHash = await bcrypt.hash(rawSecret, SALT_ROUNDS);
  const keyId = crypto.randomBytes(12).toString('hex');

  const device = await prisma.device.create({
    data: {
      name,
      keyId,
      secretHash,
      tukTukId: Number(tukTukId),
    },
    include: { tukTuk: true },
  });

  // remove secretHash before returning device object
  // eslint-disable-next-line no-unused-vars
  const { secretHash: _sh, ...deviceSafe } = device;

  return { device: deviceSafe, apiKey: `${keyId}.${rawSecret}` };
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

  // strip secretHash from each device
  const safeData = data.map((d) => {
    // eslint-disable-next-line no-unused-vars
    const { secretHash: _s, ...rest } = d;
    return rest;
  });

  return { data: safeData, meta: { total, page, limit } };
}

async function getDeviceById(id) {
  const pk = Number(id);
  if (Number.isNaN(pk)) return null;
  // Do not return secretHash
  const device = await prisma.device.findUnique({ where: { id: pk }, include: { tukTuk: true } });
  if (!device) return null;
  // remove secretHash before returning
  // eslint-disable-next-line no-unused-vars
  const { secretHash, ...rest } = device;
  return rest;
}

async function deleteDevice(id) {
  const pk = Number(id);
  if (Number.isNaN(pk)) return null;
  return prisma.device.delete({ where: { id: pk } });
}

async function rotateDeviceKey(id) {
  const pk = Number(id);
  if (Number.isNaN(pk)) return null;
  const rawSecret = crypto.randomBytes(32).toString('hex');
  const secretHash = await bcrypt.hash(rawSecret, SALT_ROUNDS);
  const rotatedAt = new Date();

  const device = await prisma.device.update({
    where: { id: pk },
    data: { secretHash, rotatedAt },
  });

  return { device: { id: device.id, name: device.name, keyId: device.keyId, tukTukId: device.tukTukId, isRevoked: device.isRevoked, rotatedAt: device.rotatedAt }, apiKey: `${device.keyId}.${rawSecret}` };
}

async function revokeDeviceKey(id) {
  const pk = Number(id);
  if (Number.isNaN(pk)) return null;
  const device = await prisma.device.update({ where: { id: pk }, data: { isRevoked: true } });
  return device;
}

module.exports = {
  createDevice,
  listDevices,
  getDeviceById,
  deleteDevice,
  rotateDeviceKey,
  revokeDeviceKey,
};

