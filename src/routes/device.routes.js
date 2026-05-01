const express = require('express');
const router = express.Router();
const controller = require('../controllers/device.controller');
const { authenticateToken, authorizeRoles } = require('../middleware/auth.middleware');

router.post('/', authenticateToken, authorizeRoles('ADMIN'), controller.createDevice);
router.get('/', authenticateToken, authorizeRoles('ADMIN'), controller.listDevices);
router.get('/:id', authenticateToken, authorizeRoles('ADMIN'), controller.getDeviceById);
router.delete('/:id', authenticateToken, authorizeRoles('ADMIN'), controller.deleteDevice);

// Key lifecycle endpoints
router.post('/:id/rotate', authenticateToken, authorizeRoles('ADMIN'), controller.rotateDevice);
router.post('/:id/revoke', authenticateToken, authorizeRoles('ADMIN'), controller.revokeDevice);

module.exports = router;
