const { randomUUID } = require('crypto');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const prisma = require('../config/prisma');

const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '7d';

function mapUser(user) {
  return {
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role,
    provinceId: user.provinceId ?? null,
    districtId: user.districtId ?? null,
    stationId: user.stationId ?? null,
    createdAt: user.createdAt,
    updatedAt: user.updatedAt,
  };
}

function signToken(user) {
  return jwt.sign(
    {
      userId: user.id,
      email: user.email,
      role: user.role,
      provinceId: user.provinceId ?? null,
      districtId: user.districtId ?? null,
      stationId: user.stationId ?? null,
      jti: randomUUID(),
    },
    JWT_SECRET,
    { expiresIn: JWT_EXPIRES_IN }
  );
}

async function loginUser({ email, password }) {
  const user = await prisma.user.findUnique({ where: { email: String(email).trim().toLowerCase() } });

  if (!user) {
    const error = new Error('Invalid email or password');
    error.statusCode = 401;
    throw error;
  }

  const passwordMatches = await bcrypt.compare(password, user.password);

  if (!passwordMatches) {
    const error = new Error('Invalid email or password');
    error.statusCode = 401;
    throw error;
  }

  const token = signToken(user);

  return {
    user: mapUser(user),
    token,
  };
}

module.exports = {
  loginUser,
  mapUser,
};
