const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const authRoutes = require('./routes/auth.routes');
const statusRoutes = require('./routes/status.routes');
const trackingRoutes = require('./routes/tracking.routes');
const { errorHandler } = require('./middleware/error.middleware');
const { notFoundHandler } = require('./middleware/not-found.middleware');

function createApp() {
  const app = express();

  app.use(helmet());
  app.use(cors());
  app.use(morgan('dev'));
  app.use(express.json());

  app.use('/api', statusRoutes);
  app.use('/auth', authRoutes);
  app.use('/', trackingRoutes);

  app.use(notFoundHandler);
  app.use(errorHandler);

  return app;
}

module.exports = createApp;
