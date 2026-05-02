const express = require('express');
const router = express.Router();
const controller = require('../controllers/device.controller');
const { authenticateToken, authorizeRoles } = require('../middleware/auth.middleware');
const { validate, deviceCreateRules, idParamRule, listFilterRules } = require('../middleware/validation.middleware');
const { ADMIN_ROLES } = require('../constants/roles');

router.post('/', authenticateToken, authorizeRoles(...ADMIN_ROLES), validate(deviceCreateRules), controller.createDevice);
router.get('/', authenticateToken, authorizeRoles(...ADMIN_ROLES), validate(listFilterRules), controller.listDevices);
router.get('/:id', authenticateToken, authorizeRoles(...ADMIN_ROLES), validate(idParamRule), controller.getDeviceById);
router.delete('/:id', authenticateToken, authorizeRoles(...ADMIN_ROLES), validate(idParamRule), controller.deleteDevice);

// Key lifecycle endpoints
router.post('/:id/rotate', authenticateToken, authorizeRoles(...ADMIN_ROLES), validate(idParamRule), controller.rotateDevice);
router.post('/:id/revoke', authenticateToken, authorizeRoles(...ADMIN_ROLES), validate(idParamRule), controller.revokeDevice);

module.exports = router;
