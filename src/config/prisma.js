const { PrismaPg } = require('@prisma/adapter-pg');
const { PrismaClient } = require('@prisma/client');
const { loadEnv } = require('./env');

// Ensure DATABASE_URL is available even if prisma is imported before server bootstrap.
loadEnv();

const adapter = new PrismaPg(process.env.DATABASE_URL);
const prisma = new PrismaClient({ adapter });

module.exports = prisma;
