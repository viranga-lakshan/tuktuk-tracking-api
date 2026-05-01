const policestationService = require('../services/policestation.service');

async function createPoliceStation(req, res, next) {
  try {
    const body = req.body || {};
    if (!body.name || !body.districtId) return res.status(400).json({ error: 'name and districtId are required' });

    const created = await policestationService.createPoliceStation(body);
    return res.status(201).json(created);
  } catch (err) {
    next(err);
  }
}

async function listPoliceStations(req, res, next) {
  try {
    const result = await policestationService.listPoliceStations(req.query, req.user);
    return res.status(200).json(result);
  } catch (err) {
    next(err);
  }
}

async function getPoliceStationById(req, res, next) {
  try {
    const { id } = req.params;
    const item = await policestationService.getPoliceStationById(id, req.user);
    if (!item) return res.status(404).json({ error: 'PoliceStation not found or unauthorized' });
    return res.status(200).json(item);
  } catch (err) {
    next(err);
  }
}

async function updatePoliceStation(req, res, next) {
  try {
    const { id } = req.params;
    const body = req.body || {};
    const updated = await policestationService.updatePoliceStation(id, body);
    if (!updated) return res.status(404).json({ error: 'PoliceStation not found' });
    return res.status(200).json(updated);
  } catch (err) {
    next(err);
  }
}

async function deletePoliceStation(req, res, next) {
  try {
    const { id } = req.params;
    const deleted = await policestationService.deletePoliceStation(id);
    if (!deleted) return res.status(404).json({ error: 'PoliceStation not found' });
    return res.status(204).send();
  } catch (err) {
    next(err);
  }
}

module.exports = {
  createPoliceStation,
  listPoliceStations,
  getPoliceStationById,
  updatePoliceStation,
  deletePoliceStation,
};
