const { loginUser } = require('../services/auth.service');
const { revokeJti } = require('../utils/revoked-jwt');

async function login(req, res, next) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: 'email and password are required',
      });
    }

    const result = await loginUser({ email, password });

    return res.status(200).json({
      message: 'Login successful',
      ...result,
    });
  } catch (error) {
    return next(error);
  }
}

function me(req, res) {
  return res.status(200).json({
    message: 'Authenticated user',
    user: req.user,
  });
}

function adminOnly(req, res) {
  return res.status(200).json({
    message: 'Admin access granted',
    user: req.user,
  });
}

function logout(req, res) {
  const { jti, exp } = req.user || {};
  if (jti && typeof exp === 'number') {
    revokeJti(jti, exp);
  }
  return res.status(200).json({
    message: 'Logged out successfully',
  });
}

module.exports = {
  adminOnly,
  login,
  logout,
  me,
};
