const express = require('express');

const {
  createLocationHandler,
  createTukTukHandler,
  deleteTukTukHandler,
  getLiveLocationsHandler,
  getLocationHistoryHandler,
  getTukTukByIdHandler,
  getTukTuksHandler,
  updateTukTukHandler,
} = require('../controllers/tracking.controller');
const { authenticateToken, authorizeRoles } = require('../middleware/auth.middleware');
const {
  validate,
  idParamRule,
  locationRules,
  tukTukRules,
  tukTukUpdateRules,
  listFilterRules,
} = require('../middleware/validation.middleware');
const { ADMIN_ROLES, ALL_HUMAN_ROLES } = require('../constants/roles');

const router = express.Router();

router.post('/tuktuks', authenticateToken, authorizeRoles(...ALL_HUMAN_ROLES), validate(tukTukRules), createTukTukHandler);
router.get('/tuktuks', authenticateToken, authorizeRoles(...ALL_HUMAN_ROLES), validate(listFilterRules), getTukTuksHandler);
router.get('/tuktuks/:id', authenticateToken, authorizeRoles(...ALL_HUMAN_ROLES), validate(idParamRule), getTukTukByIdHandler);
router.patch('/tuktuks/:id', authenticateToken, authorizeRoles(...ADMIN_ROLES), validate([...idParamRule, ...tukTukUpdateRules]), updateTukTukHandler);
router.delete('/tuktuks/:id', authenticateToken, authorizeRoles(...ADMIN_ROLES), validate(idParamRule), deleteTukTukHandler);
router.post('/locations', (req, res, next) => {
  if (req.principal && req.principal.type === 'DEVICE') {
    return next();
  }

  return authenticateToken(req, res, next);
}, validate(locationRules), createLocationHandler);
router.get('/locations/live', authenticateToken, authorizeRoles(...ALL_HUMAN_ROLES), validate(listFilterRules), getLiveLocationsHandler);
router.get('/locations/history', authenticateToken, authorizeRoles(...ALL_HUMAN_ROLES), validate(listFilterRules), getLocationHistoryHandler);

module.exports = router;
