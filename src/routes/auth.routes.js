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

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/me', authenticateToken, me);
router.get('/admin', authenticateToken, authorizeRoles('ADMIN'), adminOnly);

module.exports = router;
