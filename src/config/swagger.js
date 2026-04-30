const swaggerDocument = {
  openapi: '3.0.3',
  info: {
    title: 'TukTuk Tracking API',
    version: '1.0.0',
    description: 'Real-time TukTuk tracking API with JWT authentication and location history.',
  },
  servers: [
    {
      url: 'http://localhost:3000',
      description: 'Local development server',
    },
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      },
    },
    schemas: {
      RegisterRequest: {
        type: 'object',
        required: ['name', 'email', 'password'],
        properties: {
          name: { type: 'string', example: 'Admin User' },
          email: { type: 'string', format: 'email', example: 'admin@example.com' },
          password: { type: 'string', example: 'Secret123!' },
          role: { type: 'string', enum: ['ADMIN', 'POLICE'], example: 'ADMIN' },
        },
      },
      LoginRequest: {
        type: 'object',
        required: ['email', 'password'],
        properties: {
          email: { type: 'string', format: 'email', example: 'admin@example.com' },
          password: { type: 'string', example: 'Secret123!' },
        },
      },
      CreateTukTukRequest: {
        type: 'object',
        required: ['registrationNumber', 'policeStationId'],
        properties: {
          registrationNumber: { type: 'string', example: 'WP-1234' },
          name: { type: 'string', example: 'Blue Tuk' },
          policeStationId: { type: 'integer', example: 2 },
        },
      },
      CreateLocationRequest: {
        type: 'object',
        required: ['tukTukId', 'latitude', 'longitude'],
        properties: {
          tukTukId: { type: 'integer', example: 1 },
          latitude: { type: 'number', format: 'double', example: 6.9271 },
          longitude: { type: 'number', format: 'double', example: 79.8612 },
          recordedAt: { type: 'string', format: 'date-time' },
        },
      },
      ErrorResponse: {
        type: 'object',
        properties: {
          message: { type: 'string', example: 'Invalid email or password' },
        },
      },
    },
  },
  paths: {
    '/api/status': {
      get: {
        summary: 'Service status',
        tags: ['System'],
        responses: {
          200: {
            description: 'Service is running',
          },
        },
      },
    },
    '/auth/register': {
      post: {
        summary: 'Register user',
        tags: ['Auth'],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: { $ref: '#/components/schemas/RegisterRequest' },
            },
          },
        },
        responses: {
          201: { description: 'User registered' },
          400: { description: 'Validation error', content: { 'application/json': { schema: { $ref: '#/components/schemas/ErrorResponse' } } } },
          409: { description: 'Email exists', content: { 'application/json': { schema: { $ref: '#/components/schemas/ErrorResponse' } } } },
        },
      },
    },
    '/auth/login': {
      post: {
        summary: 'Login user',
        tags: ['Auth'],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: { $ref: '#/components/schemas/LoginRequest' },
            },
          },
        },
        responses: {
          200: { description: 'Login successful' },
          401: { description: 'Invalid credentials', content: { 'application/json': { schema: { $ref: '#/components/schemas/ErrorResponse' } } } },
        },
      },
    },
    '/auth/me': {
      get: {
        summary: 'Get authenticated user payload',
        tags: ['Auth'],
        security: [{ bearerAuth: [] }],
        responses: {
          200: { description: 'Authenticated user payload' },
          401: { description: 'Unauthorized' },
        },
      },
    },
    '/auth/admin': {
      get: {
        summary: 'Admin-only check',
        tags: ['Auth'],
        security: [{ bearerAuth: [] }],
        responses: {
          200: { description: 'Admin access granted' },
          403: { description: 'Forbidden' },
        },
      },
    },
    '/tuktuks': {
      post: {
        summary: 'Create TukTuk',
        tags: ['TukTuk'],
        security: [{ bearerAuth: [] }],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: { $ref: '#/components/schemas/CreateTukTukRequest' },
            },
          },
        },
        responses: {
          201: { description: 'TukTuk created' },
          404: { description: 'Police station not found' },
        },
      },
      get: {
        summary: 'List TukTuks with filters and pagination',
        tags: ['TukTuk'],
        security: [{ bearerAuth: [] }],
        parameters: [
          { in: 'query', name: 'provinceId', schema: { type: 'integer' } },
          { in: 'query', name: 'districtId', schema: { type: 'integer' } },
          { in: 'query', name: 'page', schema: { type: 'integer', default: 1 } },
          { in: 'query', name: 'limit', schema: { type: 'integer', default: 20 } },
        ],
        responses: {
          200: { description: 'TukTuk list' },
        },
      },
    },
    '/locations': {
      post: {
        summary: 'Record location',
        tags: ['Location'],
        security: [{ bearerAuth: [] }],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: { $ref: '#/components/schemas/CreateLocationRequest' },
            },
          },
        },
        responses: {
          201: { description: 'Location recorded' },
          404: { description: 'TukTuk not found' },
        },
      },
    },
    '/locations/live': {
      get: {
        summary: 'Get latest location per TukTuk',
        tags: ['Location'],
        security: [{ bearerAuth: [] }],
        parameters: [
          { in: 'query', name: 'provinceId', schema: { type: 'integer' } },
          { in: 'query', name: 'districtId', schema: { type: 'integer' } },
          { in: 'query', name: 'tukTukId', schema: { type: 'integer' } },
        ],
        responses: {
          200: { description: 'Live locations' },
        },
      },
    },
    '/locations/history': {
      get: {
        summary: 'Get location history with filters and pagination',
        tags: ['Location'],
        security: [{ bearerAuth: [] }],
        parameters: [
          { in: 'query', name: 'provinceId', schema: { type: 'integer' } },
          { in: 'query', name: 'districtId', schema: { type: 'integer' } },
          { in: 'query', name: 'tukTukId', schema: { type: 'integer' } },
          { in: 'query', name: 'page', schema: { type: 'integer', default: 1 } },
          { in: 'query', name: 'limit', schema: { type: 'integer', default: 20 } },
        ],
        responses: {
          200: { description: 'Location history' },
        },
      },
    },
  },
};

module.exports = swaggerDocument;
