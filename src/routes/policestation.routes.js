const express = require('express');
const router = express.Router();
const controller = require('../controllers/policestation.controller');
const { authenticateToken, authorizeRoles } = require('../middleware/auth.middleware');
const { validate, policeStationRules } = require('../middleware/validation.middleware');

router.post('/', authenticateToken, authorizeRoles('ADMIN'), validate(policeStationRules), controller.createPoliceStation);
router.get('/', authenticateToken, controller.listPoliceStations);
router.get('/:id', authenticateToken, controller.getPoliceStationById);
router.put('/:id', authenticateToken, authorizeRoles('ADMIN'), validate(policeStationRules), controller.updatePoliceStation);
router.delete('/:id', authenticateToken, authorizeRoles('ADMIN'), controller.deletePoliceStation);

module.exports = router;
