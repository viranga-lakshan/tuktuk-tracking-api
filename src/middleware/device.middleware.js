const prisma = require('../config/prisma');

async function authenticateDevice(req, res, next) {
  const apiKey = req.headers['x-api-key'];

  if (!apiKey) {
    return res.status(401).json({ error: 'API key is required (x-api-key header)' });
  }

  try {
    const device = await prisma.device.findUnique({
      where: { apiKey },
      include: { tukTuk: true },
    });

    if (!device) {
      return res.status(401).json({ error: 'Invalid API key' });
    }

    req.device = device;
    req.tukTukId = device.tukTukId;
    return next();
  } catch (err) {
    return next(err);
  }
}

module.exports = {
  authenticateDevice,
};
