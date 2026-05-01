const express = require('express');

const {
  createLocationHandler,
  createTukTukHandler,
  getLiveLocationsHandler,
  getLocationHistoryHandler,
  getTukTuksHandler,
} = require('../controllers/tracking.controller');
const { authenticateToken, authorizeRoles } = require('../middleware/auth.middleware');
const { validate, locationRules, tukTukRules, listFilterRules } = require('../middleware/validation.middleware');

const router = express.Router();

router.post('/tuktuks', authenticateToken, authorizeRoles('ADMIN','POLICE'), validate(tukTukRules), createTukTukHandler);
router.get('/tuktuks', authenticateToken, authorizeRoles('ADMIN','POLICE'), validate(listFilterRules), getTukTuksHandler);
router.post('/locations', (req, res, next) => {
  if (req.principal && req.principal.type === 'DEVICE') {
    return next();
  }

  return authenticateToken(req, res, next);
}, validate(locationRules), createLocationHandler);
router.get('/locations/live', authenticateToken, authorizeRoles('ADMIN','POLICE'), validate(listFilterRules), getLiveLocationsHandler);
router.get('/locations/history', authenticateToken, authorizeRoles('ADMIN','POLICE'), validate(listFilterRules), getLocationHistoryHandler);

module.exports = router;
