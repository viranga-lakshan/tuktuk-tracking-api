const express = require('express');
const router = express.Router();
const controller = require('../controllers/policestation.controller');
const { authenticateToken, authorizeRoles } = require('../middleware/auth.middleware');
const { validate, policeStationRules, idParamRule, listFilterRules } = require('../middleware/validation.middleware');

router.post('/', authenticateToken, authorizeRoles('ADMIN'), validate(policeStationRules), controller.createPoliceStation);
router.get('/', authenticateToken, validate(listFilterRules), controller.listPoliceStations);
router.get('/:id', authenticateToken, validate(idParamRule), controller.getPoliceStationById);
router.put('/:id', authenticateToken, authorizeRoles('ADMIN'), validate([...idParamRule, ...policeStationRules]), controller.updatePoliceStation);
router.delete('/:id', authenticateToken, authorizeRoles('ADMIN'), validate(idParamRule), controller.deletePoliceStation);

module.exports = router;
