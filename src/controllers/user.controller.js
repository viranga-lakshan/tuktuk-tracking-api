const {
  createUser,
  listUsers,
  getUserById,
  updateUser,
  deleteUser,
} = require('../services/user.service');

function normalizeActor(reqUser) {
  if (!reqUser) return null;
  return {
    ...reqUser,
    id: reqUser.userId ?? reqUser.id,
  };
}

async function createUserHandler(req, res, next) {
  try {
    const created = await createUser(normalizeActor(req.user), req.body);
    return res.status(201).json({
      message: 'User created successfully',
      user: created,
    });
  } catch (err) {
    return next(err);
  }
}

async function listUsersHandler(req, res, next) {
  try {
    const result = await listUsers(normalizeActor(req.user), req.query);
    return res.status(200).json(result);
  } catch (err) {
    return next(err);
  }
}

async function getUserHandler(req, res, next) {
  try {
    const user = await getUserById(req.params.id, normalizeActor(req.user));
    if (!user) {
      return res.status(404).json({ message: 'User not found or unauthorized' });
    }
    return res.status(200).json({ user });
  } catch (err) {
    return next(err);
  }
}

async function updateUserHandler(req, res, next) {
  try {
    const updated = await updateUser(normalizeActor(req.user), req.params.id, req.body || {});
    return res.status(200).json({
      message: 'User updated successfully',
      user: updated,
    });
  } catch (err) {
    return next(err);
  }
}

async function deleteUserHandler(req, res, next) {
  try {
    const result = await deleteUser(normalizeActor(req.user), req.params.id);
    return res.status(200).json({
      message: 'User deleted successfully',
      ...result,
    });
  } catch (err) {
    return next(err);
  }
}

module.exports = {
  createUserHandler,
  listUsersHandler,
  getUserHandler,
  updateUserHandler,
  deleteUserHandler,
};
