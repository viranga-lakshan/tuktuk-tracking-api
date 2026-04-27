const { loadEnv } = require('./src/config/env');
const createApp = require('./src/app');

loadEnv();

const port = Number(process.env.PORT) || 3000;
const app = createApp();

app.listen(port, () => {
  console.log(`TukTuk Tracking API listening on port ${port}`);
});
