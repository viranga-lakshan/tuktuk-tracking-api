const express = require('express');

const authRoutes = require('./routes/auth.routes');
const statusRoutes = require('./routes/status.routes');
const trackingRoutes = require('./routes/tracking.routes');
const { errorHandler } = require('./middleware/error.middleware');

function createApp() {
  const app = express();

  app.use(express.json());

  app.use('/api', statusRoutes);
  app.use('/auth', authRoutes);
  app.use('/', trackingRoutes);

  app.use(errorHandler);

  return app;
}

module.exports = createApp;
