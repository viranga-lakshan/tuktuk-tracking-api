/**
 * Validate required environment variables
 * Throws an error if any required var is missing
 */
function validateEnv() {
  const required = ['DATABASE_URL', 'JWT_SECRET'];
  const missing = required.filter((key) => !process.env[key]);

  if (missing.length > 0) {
    throw new Error(
      `Missing required environment variables: ${missing.join(', ')}\n` +
      'Please ensure these are set in your .env file before starting the server.'
    );
  }
}

module.exports = { validateEnv };
