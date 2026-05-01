const prisma = require('../config/prisma');

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

function buildLocationWhere({ provinceId, districtId, tukTukId }) {
  const where = {};

  if (tukTukId) {
    where.tukTukId = Number(tukTukId);
  }

  if (provinceId || districtId) {
    where.tukTuk = {
      policeStation: {
        ...(districtId
          ? {
              districtId: Number(districtId),
            }
          : {}),
        ...(provinceId
          ? {
              district: {
                provinceId: Number(provinceId),
              },
            }
          : {}),
      },
    };
  }

  return where;
}

async function createTukTuk({ registrationNumber, policeStationId, name }, user) {
  const policeStation = await prisma.policeStation.findUnique({
    where: { id: Number(policeStationId) },
  });

  if (!policeStation) {
    const error = new Error('Police station not found');
    error.statusCode = 404;
    throw error;
  }

  // If POLICE user, ensure the police station is in their district
  if (user && user.role === 'POLICE' && user.districtId) {
    if (Number(policeStation.districtId) !== Number(user.districtId)) {
      const err = new Error('Forbidden: cannot create tukTuk outside your district');
      err.statusCode = 403;
      throw err;
    }
  }

  const tukTuk = await prisma.tukTuk.create({
    data: {
      registrationNumber,
      name,
      policeStationId: policeStation.id,
    },
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
  });

  return tukTuk;
}

async function listTukTuks({ provinceId, districtId, page, limit } = {}, user) {
  const pagination = parsePagination(page, limit);
  const where = {
    ...(districtId || provinceId
      ? {
          policeStation: {
            ...(districtId
              ? {
                  districtId: Number(districtId),
                }
              : {}),
            ...(provinceId
              ? {
                  district: {
                    provinceId: Number(provinceId),
                  },
                }
              : {}),
          },
        }
      : {}),
  };

  // If POLICE user, scope to their district
  if (user && user.role === 'POLICE' && user.districtId) {
    where.policeStation = where.policeStation || {};
    where.policeStation = { ...(where.policeStation || {}), districtId: Number(user.districtId) };
  }

  const [total, tukTuks] = await Promise.all([
    prisma.tukTuk.count({ where }),
    prisma.tukTuk.findMany({
      where,
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
  const tukTuk = await prisma.tukTuk.findUnique({
    where: { id: Number(tukTukId) },
  });

  if (!tukTuk) {
    const error = new Error('TukTuk not found');
    error.statusCode = 404;
    throw error;
  }
  // If POLICE user, ensure tukTuk belongs to their district
  if (user && user.role === 'POLICE' && user.districtId) {
    const station = await prisma.policeStation.findUnique({ where: { id: tukTuk.policeStationId } });
    if (!station || Number(station.districtId) !== Number(user.districtId)) {
      const err = new Error('Forbidden: tukTuk not in your district');
      err.statusCode = 403;
      throw err;
    }
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

async function listLiveLocations({ provinceId, districtId, tukTukId } = {}, user) {
  const where = buildLocationWhere({ provinceId, districtId, tukTukId });

  if (user && user.role === 'POLICE' && user.districtId) {
    where.tukTuk = where.tukTuk || {};
    where.tukTuk.policeStation = where.tukTuk.policeStation || {};
    where.tukTuk.policeStation = { ...(where.tukTuk.policeStation || {}), districtId: Number(user.districtId) };
  }

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

async function listLocationHistory({ provinceId, districtId, tukTukId, page, limit } = {}, user) {
  const pagination = parsePagination(page, limit);
  const where = buildLocationWhere({ provinceId, districtId, tukTukId });

  if (user && user.role === 'POLICE' && user.districtId) {
    where.tukTuk = where.tukTuk || {};
    where.tukTuk.policeStation = where.tukTuk.policeStation || {};
    where.tukTuk.policeStation = { ...(where.tukTuk.policeStation || {}), districtId: Number(user.districtId) };
  }

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
  listLiveLocations,
  listLocationHistory,
  listTukTuks,
};
