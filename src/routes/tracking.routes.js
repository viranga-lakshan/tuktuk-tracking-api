const express = require('express');

const {
  createLocationHandler,
  createTukTukHandler,
  getLiveLocationsHandler,
  getLocationHistoryHandler,
  getTukTuksHandler,
} = require('../controllers/tracking.controller');
const { authenticateToken, authorizeRoles } = require('../middleware/auth.middleware');
const { authenticateDevice } = require('../middleware/device.middleware');
const { validate, locationRules, tukTukRules } = require('../middleware/validation.middleware');

const router = express.Router();

router.post('/tuktuks', authenticateToken, authorizeRoles('ADMIN','POLICE'), validate(tukTukRules), createTukTukHandler);
router.get('/tuktuks', authenticateToken, authorizeRoles('ADMIN','POLICE'), getTukTuksHandler);
router.post('/locations', (req, res, next) => {
  const apiKey = req.headers['x-api-key'];
  if (apiKey) {
    authenticateDevice(req, res, next);
  } else {
    authenticateToken(req, res, next);
  }
}, validate(locationRules), createLocationHandler);
router.get('/locations/live', authenticateToken, authorizeRoles('ADMIN','POLICE'), getLiveLocationsHandler);
router.get('/locations/history', authenticateToken, authorizeRoles('ADMIN','POLICE'), getLocationHistoryHandler);

module.exports = router;
