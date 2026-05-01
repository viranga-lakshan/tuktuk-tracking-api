const express = require('express');
const router = express.Router();
const controller = require('../controllers/device.controller');
const { authenticateToken, authorizeRoles } = require('../middleware/auth.middleware');

router.post('/', authenticateToken, authorizeRoles('ADMIN'), controller.createDevice);
router.get('/', authenticateToken, authorizeRoles('ADMIN'), controller.listDevices);
router.get('/:id', authenticateToken, authorizeRoles('ADMIN'), controller.getDeviceById);
router.delete('/:id', authenticateToken, authorizeRoles('ADMIN'), controller.deleteDevice);

module.exports = router;
