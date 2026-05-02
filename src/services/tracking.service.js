const prisma = require('../config/prisma');
const {
  mergeTukTukListWhere,
  mergeLocationWhere,
  loadTukTukWithStation,
  userMayAccessTukTuk,
} = require('../utils/scope');

function parsePagination(page, limit) {
  const parsedPage = Math.max(Number(page) || 1, 1);
  const parsedLimit = Math.min(Math.max(Number(limit) || 20, 1), 100);

  return {
    page: parsedPage,
    limit: parsedLimit,
    skip: (parsedPage - 1) * parsedLimit,
    take: parsedLimit,
  };
}

function parseOptionalQueryInt(value) {
  if (value === undefined || value === null || value === '') return null;
  const n = Number(value);
  return Number.isFinite(n) ? n : null;
}

/** Ensure province / district / station query params form a valid chain (SUPER_ADMIN / ADMIN). */
async function assertGeoFilterChainConsistency({ provinceId, districtId, policeStationId }) {
  if (districtId != null && provinceId != null) {
    const district = await prisma.district.findUnique({ where: { id: districtId } });
    if (!district) {
      const err = new Error('District not found');
      err.statusCode = 404;
      throw err;
    }
    if (Number(district.provinceId) !== Number(provinceId)) {
      const err = new Error('districtId does not belong to the given provinceId');
      err.statusCode = 400;
      throw err;
    }
  }
  if (policeStationId != null) {
    const station = await prisma.policeStation.findUnique({
      where: { id: policeStationId },
      include: { district: true },
    });
    if (!station) {
      const err = new Error('Police station not found');
      err.statusCode = 404;
      throw err;
    }
    if (districtId != null && Number(station.districtId) !== Number(districtId)) {
      const err = new Error('policeStationId does not belong to the given districtId');
      err.statusCode = 400;
      throw err;
    }
    if (provinceId != null && Number(station.district.provinceId) !== Number(provinceId)) {
      const err = new Error('policeStationId does not belong to the given provinceId');
      err.statusCode = 400;
      throw err;
    }
  }
}

/**
 * Role-aware geographic filters for list endpoints. Mutually consistent IDs are AND-ed in mergeTukTukListWhere.
 */
async function resolveTukTukGeoFiltersForList(user, raw = {}) {
  const provinceId = parseOptionalQueryInt(raw.provinceId);
  const districtId = parseOptionalQueryInt(raw.districtId);
  const policeStationId = parseOptionalQueryInt(raw.policeStationId);
  const hasGeo = provinceId != null || districtId != null || policeStationId != null;

  if (!user) {
    const err = new Error('Unauthorized');
    err.statusCode = 401;
    throw err;
  }

  const { role } = user;

  if (role === 'STATION_ADMIN' || role === 'POLICE') {
    if (hasGeo) {
      const err = new Error('Geographic filters are not available for your role');
      err.statusCode = 400;
      throw err;
    }
    return { provinceId: null, districtId: null, policeStationId: null };
  }

  if (role === 'DISTRICT_ADMIN') {
    if (provinceId != null || districtId != null) {
      const err = new Error('Only policeStationId is allowed as a geographic filter for your role');
      err.statusCode = 400;
      throw err;
    }
    if (policeStationId != null) {
      const station = await prisma.policeStation.findUnique({
        where: { id: policeStationId },
        include: { district: true },
      });
      if (!station) {
        const err = new Error('Police station not found');
        err.statusCode = 404;
        throw err;
      }
      if (Number(station.districtId) !== Number(user.districtId)) {
        const err = new Error('Forbidden: police station outside your district');
        err.statusCode = 403;
        throw err;
      }
    }
    return { provinceId: null, districtId: null, policeStationId };
  }

  if (role === 'PROVINCE_ADMIN') {
    if (provinceId != null) {
      const err = new Error('provinceId filter is not allowed for your role');
      err.statusCode = 400;
      throw err;
    }
    if (districtId != null) {
      const district = await prisma.district.findUnique({ where: { id: districtId } });
      if (!district) {
        const err = new Error('District not found');
        err.statusCode = 404;
        throw err;
      }
      if (Number(district.provinceId) !== Number(user.provinceId)) {
        const err = new Error('Forbidden: district outside your province');
        err.statusCode = 403;
        throw err;
      }
    }
    if (policeStationId != null) {
      const station = await prisma.policeStation.findUnique({
        where: { id: policeStationId },
        include: { district: true },
      });
      if (!station) {
        const err = new Error('Police station not found');
        err.statusCode = 404;
        throw err;
      }
      if (Number(station.district.provinceId) !== Number(user.provinceId)) {
        const err = new Error('Forbidden: police station outside your province');
        err.statusCode = 403;
        throw err;
      }
      if (districtId != null && Number(station.districtId) !== Number(districtId)) {
        const err = new Error('policeStationId does not belong to the given districtId');
        err.statusCode = 400;
        throw err;
      }
    }
    return { provinceId: null, districtId, policeStationId };
  }

  if (role === 'SUPER_ADMIN' || role === 'ADMIN') {
    await assertGeoFilterChainConsistency({ provinceId, districtId, policeStationId });
    return { provinceId, districtId, policeStationId };
  }

  if (hasGeo) {
    const err = new Error('Geographic filters are not available for your role');
    err.statusCode = 400;
    throw err;
  }
  return { provinceId: null, districtId: null, policeStationId: null };
}

const tukTukInclude = {
  policeStation: {
    include: {
      district: {
        include: {
          province: true,
        },
      },
    },
  },
};

async function assertPoliceStationInScope(policeStationId, user) {
  const policeStation = await prisma.policeStation.findUnique({
    where: { id: Number(policeStationId) },
    include: { district: true },
  });

  if (!policeStation) {
    const error = new Error('Police station not found');
    error.statusCode = 404;
    throw error;
  }

  if (!userMayAccessTukTuk(user, { policeStation })) {
    const error = new Error('Forbidden: police station outside your scope');
    error.statusCode = 403;
    throw error;
  }

  return policeStation;
}

async function assertTukTukInScope(id, user) {
  const tukTuk = await loadTukTukWithStation(prisma, id);

  if (!tukTuk) {
    const error = new Error('TukTuk not found');
    error.statusCode = 404;
    throw error;
  }

  if (!userMayAccessTukTuk(user, tukTuk)) {
    const error = new Error('Forbidden: tukTuk not in your scope');
    error.statusCode = 403;
    throw error;
  }

  return tukTuk;
}

async function createTukTuk({ registrationNumber, policeStationId, name }, user) {
  const policeStation = await prisma.policeStation.findUnique({
    where: { id: Number(policeStationId) },
    include: { district: true },
  });

  if (!policeStation) {
    const error = new Error('Police station not found');
    error.statusCode = 404;
    throw error;
  }

  if (!userMayAccessTukTuk(user, { policeStation })) {
    const err = new Error('Forbidden: cannot create tukTuk outside your scope');
    err.statusCode = 403;
    throw err;
  }

  const tukTuk = await prisma.tukTuk.create({
    data: {
      registrationNumber,
      name,
      policeStationId: policeStation.id,
    },
    include: tukTukInclude,
  });

  return tukTuk;
}

async function getTukTukById(id, user) {
  const tukTuk = await assertTukTukInScope(id, user);

  return prisma.tukTuk.findUnique({
    where: { id: tukTuk.id },
    include: {
      ...tukTukInclude,
      locations: {
        orderBy: {
          createdAt: 'desc',
        },
        take: 1,
      },
      devices: {
        select: {
          id: true,
          name: true,
          keyId: true,
          tukTukId: true,
          isRevoked: true,
          rotatedAt: true,
          createdAt: true,
          updatedAt: true,
        },
      },
    },
  });
}

async function updateTukTuk(id, { registrationNumber, policeStationId, name }, user) {
  const tukTuk = await assertTukTukInScope(id, user);
  const data = {};

  if (registrationNumber !== undefined) data.registrationNumber = registrationNumber;
  if (name !== undefined) data.name = name;

  if (policeStationId !== undefined) {
    const policeStation = await assertPoliceStationInScope(policeStationId, user);
    data.policeStationId = policeStation.id;
  }

  return prisma.tukTuk.update({
    where: { id: tukTuk.id },
    data,
    include: tukTukInclude,
  });
}

async function deleteTukTuk(id, user) {
  const tukTuk = await assertTukTukInScope(id, user);

  await prisma.$transaction([
    prisma.location.deleteMany({ where: { tukTukId: tukTuk.id } }),
    prisma.device.deleteMany({ where: { tukTukId: tukTuk.id } }),
    prisma.tukTuk.delete({ where: { id: tukTuk.id } }),
  ]);
}

async function listTukTuks({
  provinceId, districtId, policeStationId, page, limit,
} = {}, user) {
  const pagination = parsePagination(page, limit);
  const geo = await resolveTukTukGeoFiltersForList(user, {
    provinceId, districtId, policeStationId,
  });
  const where = mergeTukTukListWhere(user, geo);

  const [total, tukTuks] = await Promise.all([
    prisma.tukTuk.count({ where }),
    prisma.tukTuk.findMany({
      where,
      include: {
        ...tukTukInclude,
        locations: {
          orderBy: {
            createdAt: 'desc',
          },
          take: 1,
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
      skip: pagination.skip,
      take: pagination.take,
    }),
  ]);

  return {
    data: tukTuks,
    pagination: {
      page: pagination.page,
      limit: pagination.limit,
      total,
      totalPages: Math.max(Math.ceil(total / pagination.limit), 1),
    },
  };
}

async function createLocation({ tukTukId, latitude, longitude, recordedAt }, user) {
  const tukTuk = await loadTukTukWithStation(prisma, tukTukId);

  if (!tukTuk) {
    const error = new Error('TukTuk not found');
    error.statusCode = 404;
    throw error;
  }
  if (user && !userMayAccessTukTuk(user, tukTuk)) {
    const err = new Error('Forbidden: tukTuk not in your scope');
    err.statusCode = 403;
    throw err;
  }
  return prisma.location.create({
    data: {
      tukTukId: tukTuk.id,
      latitude,
      longitude,
      recordedAt: recordedAt ? new Date(recordedAt) : new Date(),
    },
    include: {
      tukTuk: true,
    },
  });
}

async function listLiveLocations({
  provinceId, districtId, policeStationId, tukTukId,
} = {}, user) {
  const geo = await resolveTukTukGeoFiltersForList(user, {
    provinceId, districtId, policeStationId,
  });
  const where = mergeLocationWhere(user, {
    ...geo,
    tukTukId,
  });

  return prisma.location.findMany({
    where,
    distinct: ['tukTukId'],
    orderBy: [
      { tukTukId: 'asc' },
      { createdAt: 'desc' },
    ],
    include: {
      tukTuk: {
        include: {
          policeStation: {
            include: {
              district: {
                include: {
                  province: true,
                },
              },
            },
          },
        },
      },
    },
  });
}

/** Latest location row for one TukTuk (must be in user's scope). */
async function getLiveLocationForTukTuk(tukTukId, user) {
  await assertTukTukInScope(tukTukId, user);
  const rows = await listLiveLocations({ tukTukId: Number(tukTukId) }, user);
  if (!rows.length) {
    const err = new Error('No location data for this TukTuk');
    err.statusCode = 404;
    throw err;
  }
  return rows[0];
}

/** Paginated location history for one TukTuk (must be in user's scope). */
async function getLocationHistoryForTukTuk(tukTukId, query = {}, user) {
  await assertTukTukInScope(tukTukId, user);
  return listLocationHistory(
    {
      ...query,
      tukTukId: Number(tukTukId),
    },
    user
  );
}

async function listLocationHistory({
  provinceId, districtId, policeStationId, tukTukId, page, limit,
  recordedAtFrom, recordedAtTo,
} = {}, user) {
  const pagination = parsePagination(page, limit);
  const geo = await resolveTukTukGeoFiltersForList(user, {
    provinceId, districtId, policeStationId,
  });
  const where = mergeLocationWhere(user, {
    ...geo,
    tukTukId,
    recordedAtFrom,
    recordedAtTo,
  });

  const [total, locations] = await Promise.all([
    prisma.location.count({ where }),
    prisma.location.findMany({
      where,
      include: {
        tukTuk: {
          include: {
            policeStation: {
              include: {
                district: {
                  include: {
                    province: true,
                  },
                },
              },
            },
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
      skip: pagination.skip,
      take: pagination.take,
    }),
  ]);

  return {
    data: locations,
    pagination: {
      page: pagination.page,
      limit: pagination.limit,
      total,
      totalPages: Math.max(Math.ceil(total / pagination.limit), 1),
    },
  };
}

module.exports = {
  createLocation,
  createTukTuk,
  deleteTukTuk,
  getLiveLocationForTukTuk,
  getLocationHistoryForTukTuk,
  getTukTukById,
  listLiveLocations,
  listLocationHistory,
  listTukTuks,
  updateTukTuk,
};
