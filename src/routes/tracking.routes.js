const express = require('express');

const {
  createLocationHandler,
  createTukTukHandler,
  getLiveLocationsHandler,
  getLocationHistoryHandler,
  getTukTuksHandler,
} = require('../controllers/tracking.controller');
const { authenticateToken } = require('../middleware/auth.middleware');
const { authenticateDevice } = require('../middleware/device.middleware');

const router = express.Router();

router.post('/tuktuks', authenticateToken, createTukTukHandler);
router.get('/tuktuks', authenticateToken, getTukTuksHandler);
router.post('/locations', (req, res, next) => {
  const apiKey = req.headers['x-api-key'];
  if (apiKey) {
    authenticateDevice(req, res, next);
  } else {
    authenticateToken(req, res, next);
  }
}, createLocationHandler);
router.get('/locations/live', authenticateToken, getLiveLocationsHandler);
router.get('/locations/history', authenticateToken, getLocationHistoryHandler);

module.exports = router;
