const express = require('express');

const {
  createUserHandler,
  listUsersHandler,
  getUserHandler,
  updateUserHandler,
  deleteUserHandler,
} = require('../controllers/user.controller');
const { authenticateToken, authorizeRoles } = require('../middleware/auth.middleware');
const { ADMIN_ROLES, ALL_HUMAN_ROLES } = require('../constants/roles');
const {
  validate,
  userCreateRules,
  userListFilterRules,
  userUpdateRules,
  idParamRule,
} = require('../middleware/validation.middleware');

const router = express.Router();

router.get(
  '/',
  authenticateToken,
  authorizeRoles(...ALL_HUMAN_ROLES),
  validate(userListFilterRules),
  listUsersHandler
);

router.get(
  '/:id',
  authenticateToken,
  authorizeRoles(...ALL_HUMAN_ROLES),
  validate(idParamRule),
  getUserHandler
);

router.patch(
  '/:id',
  authenticateToken,
  authorizeRoles(...ALL_HUMAN_ROLES),
  validate([...idParamRule, ...userUpdateRules]),
  updateUserHandler
);

router.delete(
  '/:id',
  authenticateToken,
  authorizeRoles(...ADMIN_ROLES),
  validate(idParamRule),
  deleteUserHandler
);

router.post(
  '/',
  authenticateToken,
  authorizeRoles(...ADMIN_ROLES),
  validate(userCreateRules),
  createUserHandler
);

module.exports = router;
