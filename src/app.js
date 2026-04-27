const express = require('express');

const statusRoutes = require('./routes/status.routes');

function createApp() {
  const app = express();

  app.use(express.json());

  app.use('/api', statusRoutes);

  return app;
}

module.exports = createApp;
