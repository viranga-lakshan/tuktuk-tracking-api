const deviceService = require('../services/device.service');

async function createDevice(req, res, next) {
  try {
    const body = req.body || {};
    if (!body.name || !body.tukTukId) {
      return res.status(400).json({ error: 'Missing required fields: name, tukTukId' });
    }

    const created = await deviceService.createDevice(body);
    return res.status(201).json(created);
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

module.exports = {
  createDevice,
  listDevices,
  getDeviceById,
  deleteDevice,
};
