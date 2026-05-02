const express = require('express');
const router = express.Router();
const controller = require('../controllers/policestation.controller');
const { authenticateToken, authorizeRoles } = require('../middleware/auth.middleware');
const { validate, policeStationRules, idParamRule, listFilterRules } = require('../middleware/validation.middleware');

router.post('/', authenticateToken, authorizeRoles('SUPER_ADMIN'), validate(policeStationRules), controller.createPoliceStation);
router.get('/', authenticateToken, authorizeRoles('SUPER_ADMIN'), validate(listFilterRules), controller.listPoliceStations);
router.get('/:id', authenticateToken, authorizeRoles('SUPER_ADMIN'), validate(idParamRule), controller.getPoliceStationById);
router.put('/:id', authenticateToken, authorizeRoles('SUPER_ADMIN'), validate([...idParamRule, ...policeStationRules]), controller.updatePoliceStation);
router.delete('/:id', authenticateToken, authorizeRoles('SUPER_ADMIN'), validate(idParamRule), controller.deletePoliceStation);

module.exports = router;
