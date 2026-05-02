const rateLimit = require('express-rate-limit');

const isDev = (process.env.NODE_ENV || 'development') === 'development';

// General API rate limiter
// Dev: 10 000 req / 15 min   Production: 100 req / 15 min
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: isDev ? 10000 : 100,
  message: 'Too many requests from this IP, please try again later.',
  standardHeaders: true,
  legacyHeaders: false,
});

// Auth rate limiter (login / register only)
// Reads optional env vars so you can tune without code changes.
// Dev default: 500 attempts / 15 min   Production default: 20 / 15 min
const authWindowMs = Number(process.env.AUTH_RATE_LIMIT_WINDOW_MS) || 15 * 60 * 1000;
const authMax = Number(process.env.AUTH_RATE_LIMIT_MAX) || (isDev ? 500 : 20);

const authLimiter = rateLimit({
  windowMs: authWindowMs,
  max: authMax,
  message: 'Too many authentication attempts, please try again later.',
  skipSuccessfulRequests: true,
  standardHeaders: true,
  legacyHeaders: false,
});

// Location limiter: high volume for GPS tracking
// Dev: unlimited (100 000)   Production: 1000 req / 15 min
const locationLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: isDev ? 100000 : 1000,
  message: 'Too many location updates, please try again later.',
  standardHeaders: true,
  legacyHeaders: false,
});

module.exports = {
  apiLimiter,
  authLimiter,
  locationLimiter,
};
