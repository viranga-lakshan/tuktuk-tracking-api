const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const swaggerUi = require('swagger-ui-express');

const authRoutes = require('./routes/auth.routes');
const swaggerDocument = require('./config/swagger');
const statusRoutes = require('./routes/status.routes');
const trackingRoutes = require('./routes/tracking.routes');
const deviceRoutes = require('./routes/device.routes');
const policeStationRoutes = require('./routes/policestation.routes');
const userRoutes = require('./routes/user.routes');
const { verifyApiKeyHeader } = require('./middleware/device.middleware');
const { auditMiddleware } = require('./middleware/audit.middleware');
const { errorHandler } = require('./middleware/error.middleware');
const { notFoundHandler } = require('./middleware/not-found.middleware');
const { apiLimiter, authLimiter, locationLimiter } = require('./middleware/rate-limit.middleware');

function createApp() {
  const app = express();
  app.set('trust proxy', 1);

  // Security middleware
  app.use(helmet());
  app.use(cors());
  
  // Logging
  app.use(morgan('dev'));
  
  // Body parser — skip JSON parse on GET/HEAD so clients sending
  // Content-Type: application/json with an empty body (common in Postman) do not crash.
  const jsonParser = express.json();
  app.use((req, res, next) => {
    if (req.method === 'GET' || req.method === 'HEAD') {
      return next();
    }
    return jsonParser(req, res, next);
  });

  // Audit logging middleware
  app.use(auditMiddleware);

  // If a client provides an `x-api-key`, authenticate it here and restrict
  // devices so they can only call POST /locations (GPS ingest is device-only).
  app.use(async (req, res, next) => {
    const apiKeyHeader = req.headers['x-api-key'];
    if (!apiKeyHeader) return next();
    try {
      const device = await verifyApiKeyHeader(apiKeyHeader);
      req.device = device;
      req.tukTukId = device.tukTukId;
      req.principal = { type: 'DEVICE', deviceId: device.id, tukTukId: device.tukTukId };

      // Allow only POST /locations for devices
      const path = req.path || req.originalUrl || '';
      if (!(req.method === 'POST' && path.startsWith('/locations'))) {
        return res.status(403).json({ error: 'Devices may only POST /locations' });
      }

      return next();
    } catch (err) {
      const status = err.statusCode || 401;
      return res.status(status).json({ error: err.message });
    }
  });
  
  // Rate limiting - apply general limiter to all requests
  app.use(apiLimiter);
  
  // Swagger docs (no rate limit)
  app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

  // Routes
  app.use('/api', statusRoutes);
  app.use('/auth', authLimiter, authRoutes);
  app.use('/users', userRoutes);
  app.use('/devices', deviceRoutes);
  app.use('/policestations', policeStationRoutes);
  app.use('/', locationLimiter, trackingRoutes);

  // Error handling
  app.use(notFoundHandler);
  app.use(errorHandler);

  return app;
}

module.exports = createApp;
