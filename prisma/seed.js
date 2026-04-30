require('dotenv').config();

const { PrismaPg } = require('@prisma/adapter-pg');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient({ adapter: new PrismaPg(process.env.DATABASE_URL) });

const provinceNames = [
  'Western Province',
  'Central Province',
  'Southern Province',
  'Northern Province',
  'Eastern Province',
  'North Western Province',
  'North Central Province',
  'Uva Province',
  'Sabaragamuwa Province',
];

const districtNames = [
  'Colombo',
  'Gampaha',
  'Kalutara',
  'Kandy',
  'Matale',
  'Nuwara Eliya',
  'Galle',
  'Matara',
  'Hambantota',
  'Jaffna',
  'Kilinochchi',
  'Mannar',
  'Vavuniya',
  'Mullaitivu',
  'Batticaloa',
  'Ampara',
  'Trincomalee',
  'Kurunegala',
  'Puttalam',
  'Anuradhapura',
  'Polonnaruwa',
  'Badulla',
  'Monaragala',
  'Ratnapura',
  'Kegalle',
];

const policeStationNames = [
  'Colombo Fort Police Station',
  'Maradana Police Station',
  'Kandy City Police Station',
  'Galle Fort Police Station',
  'Jaffna Central Police Station',
  'Batticaloa Police Station',
  'Kurunegala Police Station',
  'Puttalam Police Station',
  'Anuradhapura Police Station',
  'Ratnapura Police Station',
  'Negombo Police Station',
  'Kalutara Police Station',
  'Matara Police Station',
  'Trincomalee Police Station',
  'Badulla Police Station',
  'Monaragala Police Station',
  'Polonnaruwa Police Station',
  'Vavuniya Police Station',
  'Mannar Police Station',
  'Hambantota Police Station',
];

function randomBetween(min, max) {
  return Math.random() * (max - min) + min;
}

function createGeoBase(index) {
  const baseLat = 6.9 + index * 0.035;
  const baseLng = 79.8 + index * 0.028;
  return { baseLat, baseLng };
}

async function main() {
  await prisma.location.deleteMany({});
  await prisma.tukTuk.deleteMany({});
  await prisma.policeStation.deleteMany({});
  await prisma.district.deleteMany({});
  await prisma.province.deleteMany({});

  const provinces = [];
  for (const name of provinceNames) {
    provinces.push(
      await prisma.province.create({
        data: { name },
      })
    );
  }

  const districts = [];
  const districtProvinceIndexes = [];
  for (let index = 0; index < districtNames.length; index += 1) {
    const provinceIndex = index % provinces.length;
    districts.push(
      await prisma.district.create({
        data: {
          name: districtNames[index],
          provinceId: provinces[provinceIndex].id,
        },
      })
    );
    districtProvinceIndexes.push(provinceIndex);
  }

  const stations = [];
  for (let index = 0; index < policeStationNames.length; index += 1) {
    stations.push(
      await prisma.policeStation.create({
        data: {
          name: policeStationNames[index],
          districtId: districts[index % districts.length].id,
        },
      })
    );
  }

  const tukTuks = [];
  for (let index = 0; index < 200; index += 1) {
    tukTuks.push(
      await prisma.tukTuk.create({
        data: {
          registrationNumber: `WP-${String(index + 1).padStart(4, '0')}`,
          name: `TukTuk ${index + 1}`,
          policeStationId: stations[index % stations.length].id,
        },
      })
    );
  }

  const locationRows = [];
  const now = new Date();

  for (let tukIndex = 0; tukIndex < tukTuks.length; tukIndex += 1) {
    const tukTuk = tukTuks[tukIndex];
    const station = stations[tukIndex % stations.length];
    const districtIndex = tukIndex % districts.length;
    const provinceIndex = districtProvinceIndexes[districtIndex];
    const { baseLat, baseLng } = createGeoBase(provinceIndex + 1);

    for (let dayOffset = 6; dayOffset >= 0; dayOffset -= 1) {
      const timestamp = new Date(now);
      timestamp.setDate(timestamp.getDate() - dayOffset);
      timestamp.setHours(8 + (6 - dayOffset), 15 + (tukIndex % 30), 0, 0);

      locationRows.push({
        tukTukId: tukTuk.id,
        latitude: Number((baseLat + randomBetween(-0.06, 0.06)).toFixed(6)),
        longitude: Number((baseLng + randomBetween(-0.06, 0.06)).toFixed(6)),
        recordedAt: timestamp,
      });
    }
  }

  for (let index = 0; index < locationRows.length; index += 1000) {
    await prisma.location.createMany({
      data: locationRows.slice(index, index + 1000),
    });
  }

  console.log(
    JSON.stringify(
      {
        provinces: provinces.length,
        districts: districts.length,
        policeStations: stations.length,
        tuktuks: tukTuks.length,
        locations: locationRows.length,
      },
      null,
      2
    )
  );
}

main()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
