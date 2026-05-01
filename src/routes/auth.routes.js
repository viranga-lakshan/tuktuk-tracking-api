const express = require('express');

const {
  adminOnly,
  login,
  me,
  register,
} = require('../controllers/auth.controller');
const {
  authenticateToken,
  authorizeRoles,
} = require('../middleware/auth.middleware');
const { validate, authRegisterRules, authLoginRules } = require('../middleware/validation.middleware');

const router = express.Router();

router.post('/register', validate(authRegisterRules), register);
router.post('/login', validate(authLoginRules), login);
router.get('/me', authenticateToken, me);
router.get('/admin', authenticateToken, authorizeRoles('ADMIN'), adminOnly);

module.exports = router;
