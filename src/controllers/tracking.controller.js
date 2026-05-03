const {
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
    }, req.user);

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
    const result = await listTukTuks(_req.query, _req.user);

    return res.status(200).json({
      message: 'TukTuks fetched successfully',
      data: result.data,
      pagination: result.pagination,
    });
  } catch (error) {
    return next(error);
  }
}

async function getTukTukByIdHandler(req, res, next) {
  try {
    const tukTuk = await getTukTukById(req.params.id, req.user);

    return res.status(200).json({
      message: 'TukTuk fetched successfully',
      data: tukTuk,
    });
  } catch (error) {
    return next(error);
  }
}

async function updateTukTukHandler(req, res, next) {
  try {
    const tukTuk = await updateTukTuk(req.params.id, req.body, req.user);

    return res.status(200).json({
      message: 'TukTuk updated successfully',
      data: tukTuk,
    });
  } catch (error) {
    return next(error);
  }
}

async function deleteTukTukHandler(req, res, next) {
  try {
    await deleteTukTuk(req.params.id, req.user);

    return res.status(200).json({
      message: 'TukTuk deleted successfully',
    });
  } catch (error) {
    return next(error);
  }
}

async function createLocationHandler(req, res, next) {
  try {
    const { latitude, longitude, recordedAt } = req.body;
    const tukTukId = req.tukTukId;

    if (!tukTukId || latitude === undefined || longitude === undefined) {
      return res.status(400).json({
        message: 'latitude and longitude are required (vehicle is bound to the device)',
      });
    }

    const location = await createLocation({
      tukTukId,
      latitude: Number(latitude),
      longitude: Number(longitude),
      recordedAt,
    }, null);

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
    const locations = await listLiveLocations(_req.query, _req.user);

    return res.status(200).json({
      message: 'Live locations fetched successfully',
      data: locations,
    });
  } catch (error) {
    return next(error);
  }
}

async function getLiveLocationByTukTukIdHandler(req, res, next) {
  try {
    const data = await getLiveLocationForTukTuk(req.params.tukTukId, req.user);

    return res.status(200).json({
      message: 'Live location fetched successfully',
      data,
    });
  } catch (error) {
    return next(error);
  }
}

async function getLocationHistoryHandler(_req, res, next) {
  try {
    const result = await listLocationHistory(_req.query, _req.user);

    return res.status(200).json({
      message: 'Location history fetched successfully',
      data: result.data,
      pagination: result.pagination,
    });
  } catch (error) {
    return next(error);
  }
}

async function getLocationHistoryByTukTukIdHandler(req, res, next) {
  try {
    const result = await getLocationHistoryForTukTuk(req.params.tukTukId, req.query, req.user);

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
  deleteTukTukHandler,
  getLiveLocationByTukTukIdHandler,
  getLiveLocationsHandler,
  getLocationHistoryByTukTukIdHandler,
  getLocationHistoryHandler,
  getTukTukByIdHandler,
  getTukTuksHandler,
  updateTukTukHandler,
};
