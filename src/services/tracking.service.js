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
  const where = mergeTukTukListWhere(user, { provinceId, districtId, policeStationId });

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
  const where = mergeLocationWhere(user, {
    provinceId, districtId, policeStationId, tukTukId,
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

async function listLocationHistory({
  provinceId, districtId, policeStationId, tukTukId, page, limit,
} = {}, user) {
  const pagination = parsePagination(page, limit);
  const where = mergeLocationWhere(user, {
    provinceId, districtId, policeStationId, tukTukId,
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
  getTukTukById,
  listLiveLocations,
  listLocationHistory,
  listTukTuks,
  updateTukTuk,
};
