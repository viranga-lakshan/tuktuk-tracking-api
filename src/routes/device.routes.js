const express = require('express');
const router = express.Router();
const controller = require('../controllers/device.controller');
const { authenticateToken, authorizeRoles } = require('../middleware/auth.middleware');
const { validate, deviceCreateRules, idParamRule, listFilterRules } = require('../middleware/validation.middleware');

router.post('/', authenticateToken, authorizeRoles('ADMIN'), validate(deviceCreateRules), controller.createDevice);
router.get('/', authenticateToken, authorizeRoles('ADMIN'), validate(listFilterRules), controller.listDevices);
router.get('/:id', authenticateToken, authorizeRoles('ADMIN'), validate(idParamRule), controller.getDeviceById);
router.delete('/:id', authenticateToken, authorizeRoles('ADMIN'), validate(idParamRule), controller.deleteDevice);

// Key lifecycle endpoints
router.post('/:id/rotate', authenticateToken, authorizeRoles('ADMIN'), validate(idParamRule), controller.rotateDevice);
router.post('/:id/revoke', authenticateToken, authorizeRoles('ADMIN'), validate(idParamRule), controller.revokeDevice);

module.exports = router;
