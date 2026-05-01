const {
  createLocation,
  createTukTuk,
  listLiveLocations,
  listLocationHistory,
  listTukTuks,
} = require('../services/tracking.service');

async function createTukTukHandler(req, res, next) {
  try {
    const { registrationNumber, policeStationId, name } = req.body;

    if (!registrationNumber || !policeStationId) {
      return res.status(400).json({
        message: 'registrationNumber and policeStationId are required',
      });
    }

    const tukTuk = await createTukTuk({
      registrationNumber,
      policeStationId,
      name,
    });

    return res.status(201).json({
      message: 'TukTuk created successfully',
      data: tukTuk,
    });
  } catch (error) {
    return next(error);
  }
}

async function getTukTuksHandler(_req, res, next) {
  try {
    const result = await listTukTuks(_req.query);

    return res.status(200).json({
      message: 'TukTuks fetched successfully',
      data: result.data,
      pagination: result.pagination,
    });
  } catch (error) {
    return next(error);
  }
}

async function createLocationHandler(req, res, next) {
  try {
    let { tukTukId, latitude, longitude, recordedAt } = req.body;

    // Allow device authentication to override tukTukId
    if (req.device) {
      tukTukId = req.tukTukId;
    }

    if (!tukTukId || latitude === undefined || longitude === undefined) {
      return res.status(400).json({
        message: 'tukTukId, latitude, and longitude are required',
      });
    }

    const location = await createLocation({
      tukTukId,
      latitude: Number(latitude),
      longitude: Number(longitude),
      recordedAt,
    });

    return res.status(201).json({
      message: 'Location recorded successfully',
      data: location,
    });
  } catch (error) {
    return next(error);
  }
}

async function getLiveLocationsHandler(_req, res, next) {
  try {
    const locations = await listLiveLocations(_req.query);

    return res.status(200).json({
      message: 'Live locations fetched successfully',
      data: locations,
    });
  } catch (error) {
    return next(error);
  }
}

async function getLocationHistoryHandler(_req, res, next) {
  try {
    const result = await listLocationHistory(_req.query);

    return res.status(200).json({
      message: 'Location history fetched successfully',
      data: result.data,
      pagination: result.pagination,
    });
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  createLocationHandler,
  createTukTukHandler,
  getLiveLocationsHandler,
  getLocationHistoryHandler,
  getTukTuksHandler,
};
