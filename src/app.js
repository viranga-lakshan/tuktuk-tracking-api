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
const { errorHandler } = require('./middleware/error.middleware');
const { notFoundHandler } = require('./middleware/not-found.middleware');
const { apiLimiter, authLimiter, locationLimiter } = require('./middleware/rate-limit.middleware');

function createApp() {
  const app = express();

  // Security middleware
  app.use(helmet());
  app.use(cors());
  
  // Logging
  app.use(morgan('dev'));
  
  // Body parser
  app.use(express.json());
  
  // Rate limiting - apply general limiter to all requests
  app.use(apiLimiter);
  
  // Swagger docs (no rate limit)
  app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

  // Routes
  app.use('/api', statusRoutes);
  app.use('/auth', authLimiter, authRoutes);
  app.use('/devices', deviceRoutes);
  app.use('/', locationLimiter, trackingRoutes);

  // Error handling
  app.use(notFoundHandler);
  app.use(errorHandler);

  return app;
}

module.exports = createApp;
