/**
 * Build Prisma where fragments for TukTuk rows based on JWT user scope.
 * SUPER_ADMIN/legacy ADMIN: no extra restriction (empty object).
 */
function tukTukWhereForUser(user) {
  if (!user || user.role === 'SUPER_ADMIN' || user.role === 'ADMIN') return {};

  if (user.role === 'PROVINCE_ADMIN' && user.provinceId != null) {
    return {
      policeStation: {
        district: { provinceId: Number(user.provinceId) },
      },
    };
  }

  if (user.role === 'DISTRICT_ADMIN' && user.districtId != null) {
    return { policeStation: { districtId: Number(user.districtId) } };
  }

  if (user.role === 'STATION_ADMIN' && user.stationId != null) {
    return { policeStationId: Number(user.stationId) };
  }

  if (user.role === 'POLICE') {
    if (user.stationId != null) {
      return { policeStationId: Number(user.stationId) };
    }
  }

  return { id: -1 };
}

/** Merge scope with optional query filters; non–SUPER_ADMIN cannot widen beyond their scope. */
function mergeTukTukListWhere(user, { provinceId, districtId, policeStationId } = {}) {
  const scope = tukTukWhereForUser(user);
  const and = [];

  if (Object.keys(scope).length) and.push(scope);

  if (provinceId != null) {
    and.push({
      policeStation: { district: { provinceId: Number(provinceId) } },
    });
  }
  if (districtId != null) {
    and.push({ policeStation: { districtId: Number(districtId) } });
  }
  if (policeStationId != null) {
    and.push({ policeStationId: Number(policeStationId) });
  }

  if (!and.length) return {};
  if (and.length === 1) return and[0];
  return { AND: and };
}

/** Location rows join TukTuk; reuse same geographic scope. */
function locationWhereFromTukTukScope(user) {
  const tw = tukTukWhereForUser(user);
  if (!Object.keys(tw).length) return {};
  return { tukTuk: tw };
}

function mergeLocationWhere(user, filters) {
  const { provinceId, districtId, policeStationId, tukTukId, recordedAtFrom, recordedAtTo } = filters;
  const parts = [];

  const scopePart = locationWhereFromTukTukScope(user);
  if (Object.keys(scopePart).length) parts.push(scopePart);

  if (tukTukId != null) parts.push({ tukTukId: Number(tukTukId) });

  if (provinceId != null) {
    parts.push({
      tukTuk: {
        policeStation: { district: { provinceId: Number(provinceId) } },
      },
    });
  }
  if (districtId != null) {
    parts.push({ tukTuk: { policeStation: { districtId: Number(districtId) } } });
  }
  if (policeStationId != null) {
    parts.push({ tukTuk: { policeStationId: Number(policeStationId) } });
  }

  const time = {};
  if (recordedAtFrom) time.gte = new Date(recordedAtFrom);
  if (recordedAtTo) time.lte = new Date(recordedAtTo);
  if (Object.keys(time).length) parts.push({ recordedAt: time });

  if (!parts.length) return {};
  if (parts.length === 1) return parts[0];
  return { AND: parts };
}

/** Police station list scope */
function policeStationWhereForUser(user) {
  if (!user || user.role === 'SUPER_ADMIN' || user.role === 'ADMIN') return {};

  if (user.role === 'PROVINCE_ADMIN' && user.provinceId != null) {
    return { district: { provinceId: Number(user.provinceId) } };
  }
  if (user.role === 'DISTRICT_ADMIN' && user.districtId != null) {
    return { districtId: Number(user.districtId) };
  }
  if (user.role === 'STATION_ADMIN' && user.stationId != null) {
    return { id: Number(user.stationId) };
  }
  if (user.role === 'POLICE') {
    if (user.stationId != null) return { id: Number(user.stationId) };
  }

  return { id: -1 };
}

function mergePoliceStationWhere(user, { provinceId, districtId } = {}) {
  const scope = policeStationWhereForUser(user);
  const and = [];
  if (Object.keys(scope).length) and.push(scope);
  if (districtId != null) and.push({ districtId: Number(districtId) });
  else if (provinceId != null) and.push({ district: { provinceId: Number(provinceId) } });
  if (!and.length) return {};
  if (and.length === 1) return and[0];
  return { AND: and };
}

async function loadTukTukWithStation(prisma, tukTukId) {
  return prisma.tukTuk.findUnique({
    where: { id: Number(tukTukId) },
    include: {
      policeStation: { include: { district: { include: { province: true } } } },
    },
  });
}

/** Returns true if tukTuk is within user's administrative scope (for device CRUD, writes). */
function userMayAccessTukTuk(user, tukTuk) {
  if (!user || !tukTuk) return false;
  if (user.role === 'SUPER_ADMIN' || user.role === 'ADMIN') return true;
  const station = tukTuk.policeStation;
  if (!station) return false;
  const provinceId = station.district?.provinceId;

  if (user.role === 'PROVINCE_ADMIN' && user.provinceId != null) {
    return Number(provinceId) === Number(user.provinceId);
  }
  if (user.role === 'DISTRICT_ADMIN' && user.districtId != null) {
    return Number(station.districtId) === Number(user.districtId);
  }
  if (user.role === 'STATION_ADMIN' && user.stationId != null) {
    return Number(station.id) === Number(user.stationId);
  }
  if (user.role === 'POLICE' && user.stationId != null) {
    return Number(station.id) === Number(user.stationId);
  }
  return false;
}

module.exports = {
  tukTukWhereForUser,
  mergeTukTukListWhere,
  locationWhereFromTukTukScope,
  mergeLocationWhere,
  policeStationWhereForUser,
  mergePoliceStationWhere,
  loadTukTukWithStation,
  userMayAccessTukTuk,
};
