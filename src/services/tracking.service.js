const prisma = require('../config/prisma');

async function createTukTuk({ registrationNumber, policeStationId, name }) {
  const policeStation = await prisma.policeStation.findUnique({
    where: { id: Number(policeStationId) },
  });

  if (!policeStation) {
    const error = new Error('Police station not found');
    error.statusCode = 404;
    throw error;
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

async function listTukTuks() {
  return prisma.tukTuk.findMany({
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
  });
}

async function createLocation({ tukTukId, latitude, longitude, recordedAt }) {
  const tukTuk = await prisma.tukTuk.findUnique({
    where: { id: Number(tukTukId) },
  });

  if (!tukTuk) {
    const error = new Error('TukTuk not found');
    error.statusCode = 404;
    throw error;
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

async function listLiveLocations() {
  return prisma.location.findMany({
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

async function listLocationHistory() {
  return prisma.location.findMany({
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
  });
}

module.exports = {
  createLocation,
  createTukTuk,
  listLiveLocations,
  listLocationHistory,
  listTukTuks,
};
