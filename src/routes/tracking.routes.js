const express = require('express');

const {
  createLocationHandler,
  createTukTukHandler,
  getLiveLocationsHandler,
  getLocationHistoryHandler,
  getTukTuksHandler,
} = require('../controllers/tracking.controller');
const { authenticateToken } = require('../middleware/auth.middleware');

const router = express.Router();

router.post('/tuktuks', authenticateToken, createTukTukHandler);
router.get('/tuktuks', authenticateToken, getTukTuksHandler);
router.post('/locations', authenticateToken, createLocationHandler);
router.get('/locations/live', authenticateToken, getLiveLocationsHandler);
router.get('/locations/history', authenticateToken, getLocationHistoryHandler);

module.exports = router;
