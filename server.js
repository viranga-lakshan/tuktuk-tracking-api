const { loadEnv } = require('./src/config/env');
const { validateEnv } = require('./src/config/validation');
const createApp = require('./src/app');

loadEnv();

// Validate required environment variables
try {
  validateEnv();
} catch (error) {
  console.error('❌ Configuration Error:', error.message);
  process.exit(1);
}

const port = Number(process.env.PORT) || 3000;
const nodeEnv = process.env.NODE_ENV || 'development';
const app = createApp();

app.listen(port, () => {
  console.log(`✅ TukTuk Tracking API listening on port ${port}`);
  console.log(`📝 Environment: ${nodeEnv}`);
});
