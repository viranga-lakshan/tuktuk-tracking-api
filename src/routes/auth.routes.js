const express = require('express');

const {
  adminOnly,
  login,
  logout,
  me,
} = require('../controllers/auth.controller');
const {
  authenticateToken,
  authorizeRoles,
} = require('../middleware/auth.middleware');
const { validate, authLoginRules } = require('../middleware/validation.middleware');
const { ADMIN_ROLES } = require('../constants/roles');

const router = express.Router();

router.post('/login', validate(authLoginRules), login);
router.post('/logout', authenticateToken, logout);
router.get('/me', authenticateToken, me);
router.get('/admin', authenticateToken, authorizeRoles(...ADMIN_ROLES), adminOnly);

module.exports = router;
