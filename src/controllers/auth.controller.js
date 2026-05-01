const { loginUser, registerUser } = require('../services/auth.service');

async function register(req, res, next) {
  try {
    const { name, email, password, role, districtId } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        message: 'name, email, and password are required',
      });
    }

    // If role is POLICE, require districtId
    if (role === 'POLICE' && !districtId) {
      return res.status(400).json({ message: 'districtId is required for POLICE users' });
    }

    const result = await registerUser({ name, email, password, role, districtId });

    return res.status(201).json({
      message: 'User registered successfully',
      ...result,
    });
  } catch (error) {
    return next(error);
  }
}

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

module.exports = {
  adminOnly,
  login,
  me,
  register,
};
