const prisma = require('../config/prisma');
const bcrypt = require('bcryptjs');

// Expect header in form: <keyId>.<secret>
async function verifyApiKeyHeader(apiKeyHeader) {
  if (!apiKeyHeader) throw Object.assign(new Error('API key is required (x-api-key header)'), { statusCode: 401 });

  const idx = apiKeyHeader.indexOf('.');
  if (idx === -1) throw Object.assign(new Error('Malformed API key'), { statusCode: 401 });

  const keyId = apiKeyHeader.slice(0, idx);
  const secret = apiKeyHeader.slice(idx + 1);

  const device = await prisma.device.findUnique({ where: { keyId }, include: { tukTuk: true } });
  if (!device) throw Object.assign(new Error('Invalid API key'), { statusCode: 401 });
  if (device.isRevoked) throw Object.assign(new Error('API key revoked'), { statusCode: 401 });

  const match = await bcrypt.compare(secret, device.secretHash);
  if (!match) throw Object.assign(new Error('Invalid API key'), { statusCode: 401 });

  return device;
}

async function authenticateDevice(req, res, next) {
  const apiKeyHeader = req.headers['x-api-key'];
  try {
    const device = await verifyApiKeyHeader(apiKeyHeader);
    req.device = device;
    req.tukTukId = device.tukTukId;
    req.principal = { type: 'DEVICE', deviceId: device.id, tukTukId: device.tukTukId };
    return next();
  } catch (err) {
    const status = err.statusCode || 500;
    return res.status(status).json({ error: err.message });
  }
}

/** POST /locations: only on-vehicle devices (after global x-api-key middleware sets req.device). */
function requireDeviceForLocationPost(req, res, next) {
  if (req.device && req.principal && req.principal.type === 'DEVICE') {
    return next();
  }
  return res.status(401).json({
    message: 'Location ingest requires a valid device x-api-key',
  });
}

module.exports = {
  authenticateDevice,
  requireDeviceForLocationPost,
  verifyApiKeyHeader,
};
