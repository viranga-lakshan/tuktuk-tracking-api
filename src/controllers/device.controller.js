const deviceService = require('../services/device.service');

async function createDevice(req, res, next) {
  try {
    const body = req.body || {};
    if (!body.name || !body.tukTukId) {
      return res.status(400).json({ error: 'Missing required fields: name, tukTukId' });
    }

    const { device, apiKey } = await deviceService.createDevice(body);
    // Log audit event
    if (req.audit) {
      req.audit('DEVICE_CREATED', { deviceId: device.id, name: device.name, tukTukId: device.tukTukId });
    }
    // Return raw apiKey only once
    return res.status(201).json({ device, apiKey });
  } catch (err) {
    next(err);
  }
}

async function listDevices(req, res, next) {
  try {
    const result = await deviceService.listDevices(req.query);
    return res.status(200).json(result);
  } catch (err) {
    next(err);
  }
}

async function getDeviceById(req, res, next) {
  try {
    const { id } = req.params;
    const item = await deviceService.getDeviceById(id);
    if (!item) return res.status(404).json({ error: 'Device not found' });
    return res.status(200).json(item);
  } catch (err) {
    next(err);
  }
}

async function deleteDevice(req, res, next) {
  try {
    const { id } = req.params;
    const deleted = await deviceService.deleteDevice(id);
    if (!deleted) return res.status(404).json({ error: 'Device not found' });
    return res.status(204).send();
  } catch (err) {
    next(err);
  }
}

async function rotateDevice(req, res, next) {
  try {
    const { id } = req.params;
    const result = await deviceService.rotateDeviceKey(id);
    if (!result) return res.status(404).json({ error: 'Device not found' });
    // Log audit event
    if (req.audit) {
      req.audit('DEVICE_KEY_ROTATED', { deviceId: Number(id) });
    }
    return res.status(200).json(result);
  } catch (err) {
    next(err);
  }
}

async function revokeDevice(req, res, next) {
  try {
    const { id } = req.params;
    const result = await deviceService.revokeDeviceKey(id);
    if (!result) return res.status(404).json({ error: 'Device not found' });
    // Log audit event
    if (req.audit) {
      req.audit('DEVICE_KEY_REVOKED', { deviceId: Number(id) });
    }
    return res.status(200).json({ message: 'Device key revoked' });
  } catch (err) {
    next(err);
  }
}

module.exports = {
  createDevice,
  listDevices,
  getDeviceById,
  deleteDevice,
  rotateDevice,
  revokeDevice,
};


