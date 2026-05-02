const bcrypt = require('bcryptjs');
const prisma = require('../config/prisma');
const { CREATE_RULES, ROLES } = require('../constants/roles');

const SALT_ROUNDS = 10;

function normalizeId(value) {
  if (value === undefined || value === null || value === '') return null;
  const n = Number(value);
  return Number.isNaN(n) ? null : n;
}

function safeUser(user) {
  if (!user) return null;
  // eslint-disable-next-line no-unused-vars
  const { password: _password, ...safe } = user;
  return safe;
}

function countScopes({ provinceId, districtId, stationId }) {
  return [provinceId, districtId, stationId].filter((v) => normalizeId(v) != null).length;
}

function validateRoleScope(role, body) {
  const provinceId = normalizeId(body.provinceId);
  const districtId = normalizeId(body.districtId);
  const stationId = normalizeId(body.stationId);
  const scopeCount = countScopes({ provinceId, districtId, stationId });

  if (role === 'SUPER_ADMIN' || role === 'ADMIN') {
    if (scopeCount > 0) {
      const err = new Error(`${role} must not have provinceId, districtId, or stationId`);
      err.statusCode = 400;
      throw err;
    }
    return { provinceId: null, districtId: null, stationId: null };
  }

  if (role === 'PROVINCE_ADMIN') {
    if (!provinceId || districtId || stationId) {
      const err = new Error('PROVINCE_ADMIN requires provinceId only');
      err.statusCode = 400;
      throw err;
    }
    return { provinceId, districtId: null, stationId: null };
  }

  if (role === 'DISTRICT_ADMIN') {
    if (!districtId || provinceId || stationId) {
      const err = new Error('DISTRICT_ADMIN requires districtId only');
      err.statusCode = 400;
      throw err;
    }
    return { provinceId: null, districtId, stationId: null };
  }

  if (role === 'STATION_ADMIN' || role === 'POLICE') {
    if (!stationId || provinceId || districtId) {
      const err = new Error(`${role} requires stationId only`);
      err.statusCode = 400;
      throw err;
    }
    return { provinceId: null, districtId: null, stationId };
  }

  const err = new Error('Invalid role');
  err.statusCode = 400;
  throw err;
}

async function assertScopeExists(role, scopes) {
  if (role === 'PROVINCE_ADMIN') {
    const province = await prisma.province.findUnique({ where: { id: scopes.provinceId } });
    if (!province) {
      const err = new Error('Province not found');
      err.statusCode = 404;
      throw err;
    }
  }

  if (role === 'DISTRICT_ADMIN') {
    const district = await prisma.district.findUnique({ where: { id: scopes.districtId } });
    if (!district) {
      const err = new Error('District not found');
      err.statusCode = 404;
      throw err;
    }
  }

  if (role === 'STATION_ADMIN' || role === 'POLICE') {
    const station = await prisma.policeStation.findUnique({ where: { id: scopes.stationId } });
    if (!station) {
      const err = new Error('Police station not found');
      err.statusCode = 404;
      throw err;
    }
  }
}

async function assertActorMayAssignScope(actor, targetRole, scopes) {
  if (actor.role === 'SUPER_ADMIN' || actor.role === 'ADMIN') return;

  if (actor.role === 'PROVINCE_ADMIN') {
    const actorProvinceId = normalizeId(actor.provinceId);
    if (!actorProvinceId) {
      const err = new Error('Creator province scope missing');
      err.statusCode = 403;
      throw err;
    }

    if (targetRole === 'DISTRICT_ADMIN') {
      const district = await prisma.district.findUnique({ where: { id: scopes.districtId } });
      if (!district || Number(district.provinceId) !== actorProvinceId) {
        const err = new Error('Target district is outside your province');
        err.statusCode = 403;
        throw err;
      }
    }

    if (targetRole === 'STATION_ADMIN' || targetRole === 'POLICE') {
      const station = await prisma.policeStation.findUnique({
        where: { id: scopes.stationId },
        include: { district: true },
      });
      if (!station || Number(station.district.provinceId) !== actorProvinceId) {
        const err = new Error('Target station is outside your province');
        err.statusCode = 403;
        throw err;
      }
    }
  }

  if (actor.role === 'DISTRICT_ADMIN') {
    const actorDistrictId = normalizeId(actor.districtId);
    if (!actorDistrictId) {
      const err = new Error('Creator district scope missing');
      err.statusCode = 403;
      throw err;
    }

    if (targetRole === 'STATION_ADMIN' || targetRole === 'POLICE') {
      const station = await prisma.policeStation.findUnique({ where: { id: scopes.stationId } });
      if (!station || Number(station.districtId) !== actorDistrictId) {
        const err = new Error('Target station is outside your district');
        err.statusCode = 403;
        throw err;
      }
    }
  }

  if (actor.role === 'STATION_ADMIN') {
    const actorStationId = normalizeId(actor.stationId);
    if (targetRole !== 'POLICE' || !actorStationId || Number(scopes.stationId) !== actorStationId) {
      const err = new Error('Target station is outside your station');
      err.statusCode = 403;
      throw err;
    }
  }
}

function userWhereForActor(actor) {
  if (!actor) return { id: -1 };
  if (actor.role === 'SUPER_ADMIN' || actor.role === 'ADMIN') return {};
  if (actor.role === 'PROVINCE_ADMIN' && actor.provinceId != null) {
    const provinceId = Number(actor.provinceId);
    return {
      AND: [
        { role: { notIn: ['SUPER_ADMIN', 'ADMIN'] } },
        {
          OR: [
            { provinceId },
            { district: { provinceId } },
            { station: { district: { provinceId } } },
          ],
        },
      ],
    };
  }
  if (actor.role === 'DISTRICT_ADMIN' && actor.districtId != null) {
    const districtId = Number(actor.districtId);
    return {
      AND: [
        { role: { notIn: ['SUPER_ADMIN', 'ADMIN', 'PROVINCE_ADMIN'] } },
        {
          OR: [
            { districtId },
            { station: { districtId } },
          ],
        },
      ],
    };
  }
  if (actor.role === 'STATION_ADMIN' && actor.stationId != null) {
    return {
      OR: [
        { id: Number(actor.id) },
        { role: 'POLICE', stationId: Number(actor.stationId) },
      ],
    };
  }
  if (actor.role === 'POLICE') return { id: Number(actor.id) };
  return { id: -1 };
}

function mergeUserWhere(actor, filters = {}) {
  const parts = [];
  const scope = userWhereForActor(actor);
  if (Object.keys(scope).length) parts.push(scope);

  if (filters.stationId != null) {
    parts.push({ stationId: Number(filters.stationId) });
  } else if (filters.districtId != null) {
    const districtId = Number(filters.districtId);
    parts.push({ OR: [{ districtId }, { station: { districtId } }] });
  } else if (filters.provinceId != null) {
    const provinceId = Number(filters.provinceId);
    parts.push({
      OR: [
        { provinceId },
        { district: { provinceId } },
        { station: { district: { provinceId } } },
      ],
    });
  }

  if (!parts.length) return {};
  if (parts.length === 1) return parts[0];
  return { AND: parts };
}

async function createUser(actor, body) {
  const targetRole = String(body.role || 'POLICE').toUpperCase();
  const allowed = CREATE_RULES[actor.role] || [];

  if (!allowed.includes(targetRole)) {
    const err = new Error(`Forbidden: you cannot create users with role ${targetRole}`);
    err.statusCode = 403;
    throw err;
  }

  if (!ROLES.includes(targetRole)) {
    const err = new Error('Invalid role');
    err.statusCode = 400;
    throw err;
  }

  const scopes = validateRoleScope(targetRole, body);
  await assertScopeExists(targetRole, scopes);
  await assertActorMayAssignScope(actor, targetRole, scopes);

  const email = String(body.email).trim().toLowerCase();
  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) {
    const err = new Error('Email already exists');
    err.statusCode = 409;
    throw err;
  }

  const user = await prisma.user.create({
    data: {
      name: String(body.name).trim(),
      email,
      password: await bcrypt.hash(String(body.password), SALT_ROUNDS),
      role: targetRole,
      provinceId: scopes.provinceId,
      districtId: scopes.districtId,
      stationId: scopes.stationId,
    },
  });

  return safeUser(user);
}

async function listUsers(actor, query) {
  const page = Math.max(1, Number(query.page) || 1);
  const limit = Math.min(100, Number(query.limit) || 25);
  const skip = (page - 1) * limit;
  const where = mergeUserWhere(actor, query);

  const [data, total] = await Promise.all([
    prisma.user.findMany({
      where,
      skip,
      take: limit,
      orderBy: { id: 'asc' },
      include: {
        province: true,
        district: true,
        station: true,
      },
    }),
    prisma.user.count({ where }),
  ]);

  return {
    data: data.map(safeUser),
    pagination: { page, limit, total },
  };
}

async function getUserById(id, actor) {
  const pk = Number(id);
  if (Number.isNaN(pk)) return null;

  const scope = mergeUserWhere(actor);
  const where = Object.keys(scope).length ? { AND: [{ id: pk }, scope] } : { id: pk };
  const user = await prisma.user.findFirst({
    where,
    include: {
      province: true,
      district: true,
      station: true,
    },
  });

  return safeUser(user);
}

async function updateUser(actor, userId, body) {
  const pk = Number(userId);
  if (Number.isNaN(pk)) {
    const err = new Error('User not found');
    err.statusCode = 404;
    throw err;
  }

  const current = await getUserById(pk, actor);
  if (!current) {
    const err = new Error('User not found or unauthorized');
    err.statusCode = 404;
    throw err;
  }

  if (actor.role === 'POLICE') {
    if (Number(actor.id) !== pk || body.role !== undefined || body.provinceId !== undefined
      || body.districtId !== undefined || body.stationId !== undefined) {
      const err = new Error('Forbidden: cannot change role or scope');
      err.statusCode = 403;
      throw err;
    }
  }

  const nextRole = body.role ? String(body.role).toUpperCase() : current.role;
  const data = {};

  if (body.name !== undefined) data.name = String(body.name).trim();
  if (body.email !== undefined) {
    const email = String(body.email).trim().toLowerCase();
    if (email !== current.email) {
      const existing = await prisma.user.findUnique({ where: { email } });
      if (existing && existing.id !== pk) {
        const err = new Error('Email already exists');
        err.statusCode = 409;
        throw err;
      }
    }
    data.email = email;
  }
  if (body.password !== undefined && body.password !== '') {
    data.password = await bcrypt.hash(String(body.password), SALT_ROUNDS);
  }

  if (body.role !== undefined || body.provinceId !== undefined || body.districtId !== undefined || body.stationId !== undefined) {
    const allowed = CREATE_RULES[actor.role] || [];
    if (!['SUPER_ADMIN', 'ADMIN'].includes(actor.role) && !allowed.includes(nextRole)) {
      const err = new Error(`Forbidden: you cannot assign role ${nextRole}`);
      err.statusCode = 403;
      throw err;
    }

    const scopes = validateRoleScope(nextRole, {
      provinceId: body.provinceId !== undefined ? body.provinceId : current.provinceId,
      districtId: body.districtId !== undefined ? body.districtId : current.districtId,
      stationId: body.stationId !== undefined ? body.stationId : current.stationId,
    });
    await assertScopeExists(nextRole, scopes);
    await assertActorMayAssignScope(actor, nextRole, scopes);

    data.role = nextRole;
    data.provinceId = scopes.provinceId;
    data.districtId = scopes.districtId;
    data.stationId = scopes.stationId;
  }

  if (!Object.keys(data).length) {
    const err = new Error('No valid fields to update');
    err.statusCode = 400;
    throw err;
  }

  const updated = await prisma.user.update({ where: { id: pk }, data });
  return safeUser(updated);
}

async function deleteUser(actor, userId) {
  const pk = Number(userId);
  if (Number.isNaN(pk)) {
    const err = new Error('User not found');
    err.statusCode = 404;
    throw err;
  }

  if (Number(actor.id) === pk) {
    const err = new Error('Cannot delete your own account');
    err.statusCode = 400;
    throw err;
  }

  const current = await getUserById(pk, actor);
  if (!current) {
    const err = new Error('User not found or unauthorized');
    err.statusCode = 404;
    throw err;
  }

  const allowed = CREATE_RULES[actor.role] || [];
  if (!allowed.includes(current.role)) {
    const err = new Error(`Forbidden: you cannot delete users with role ${current.role}`);
    err.statusCode = 403;
    throw err;
  }

  await prisma.user.delete({ where: { id: pk } });
  return { id: pk };
}

module.exports = {
  createUser,
  listUsers,
  getUserById,
  updateUser,
  deleteUser,
  normalizeId,
  validateRoleScope,
};
