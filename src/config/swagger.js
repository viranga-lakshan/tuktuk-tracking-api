const swaggerDocument = {
  openapi: '3.0.3',
  info: {
    title: 'TukTuk Tracking API',
    version: '1.1.0',
    description: 'Real-time TukTuk tracking API with JWT auth, RBAC, and secure device API key authentication.',
  },
  servers: [
    {
      url: 'http://localhost:3000',
      description: 'Local development server',
    },
  ],
  tags: [
    { name: 'System' },
    { name: 'Auth' },
    { name: 'TukTuk' },
    { name: 'Location' },
    { name: 'PoliceStation' },
    { name: 'Device' },
    { name: 'Users' },
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      },
      xApiKey: {
        type: 'apiKey',
        in: 'header',
        name: 'x-api-key',
        description: 'Device API key in format <keyId>.<secret>',
      },
    },
    schemas: {
      ErrorResponse: {
        type: 'object',
        properties: {
          message: { type: 'string', example: 'Invalid or expired token' },
          error: { type: 'string', example: 'Devices may only POST /locations' },
          errors: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                msg: { type: 'string', example: 'latitude must be between -90 and 90' },
                path: { type: 'string', example: 'latitude' },
                location: { type: 'string', example: 'body' },
              },
            },
          },
        },
      },
      User: {
        type: 'object',
        properties: {
          id: { type: 'integer', example: 1 },
          name: { type: 'string', example: 'HQ Admin' },
          email: { type: 'string', format: 'email', example: 'admin@example.com' },
          role: {
            type: 'string',
            example: 'SUPER_ADMIN',
            description: 'ADMIN, SUPER_ADMIN, PROVINCE_ADMIN, DISTRICT_ADMIN, STATION_ADMIN, POLICE',
          },
          provinceId: { type: 'integer', nullable: true, example: null },
          districtId: { type: 'integer', nullable: true, example: null },
          stationId: { type: 'integer', nullable: true, example: null },
          createdAt: { type: 'string', format: 'date-time' },
          updatedAt: { type: 'string', format: 'date-time' },
        },
      },
      LoginRequest: {
        type: 'object',
        required: ['email', 'password'],
        properties: {
          email: { type: 'string', format: 'email', example: 'admin@example.com' },
          password: { type: 'string', minLength: 8, example: 'Secret123!' },
        },
      },
      UserCreateRequest: {
        type: 'object',
        required: ['name', 'email', 'password'],
        description:
          'Create a user via POST /users with Bearer token. Caller role must be allowed to create the target role (RBAC).',
        properties: {
          name: { type: 'string', example: 'Officer Name' },
          email: { type: 'string', format: 'email', example: 'officer@example.com' },
          password: { type: 'string', minLength: 8, example: 'Secret123!' },
          role: { type: 'string', example: 'POLICE' },
          provinceId: { type: 'integer', nullable: true },
          districtId: { type: 'integer', nullable: true },
          stationId: { type: 'integer', nullable: true },
        },
      },
      AuthResponse: {
        type: 'object',
        properties: {
          message: { type: 'string', example: 'Login successful' },
          user: { $ref: '#/components/schemas/User' },
          token: {
            type: 'string',
            example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
          },
        },
      },
      PoliceStation: {
        type: 'object',
        properties: {
          id: { type: 'integer', example: 10 },
          name: { type: 'string', example: 'Kandy City Police Station' },
          districtId: { type: 'integer', example: 4 },
          address: { type: 'string', example: 'No 10, Main Street, Kandy', nullable: true },
          createdAt: { type: 'string', format: 'date-time' },
          updatedAt: { type: 'string', format: 'date-time' },
        },
      },
      CreatePoliceStationRequest: {
        type: 'object',
        required: ['name', 'districtId'],
        properties: {
          name: { type: 'string', example: 'Matale Police Station' },
          districtId: { type: 'integer', example: 5 },
          address: { type: 'string', example: 'No 12, Police Road, Matale' },
        },
      },
      TukTuk: {
        type: 'object',
        properties: {
          id: { type: 'integer', example: 11 },
          registrationNumber: { type: 'string', example: 'WP-1234' },
          name: { type: 'string', nullable: true, example: 'Blue Tuk' },
          policeStationId: { type: 'integer', example: 2 },
          createdAt: { type: 'string', format: 'date-time' },
          updatedAt: { type: 'string', format: 'date-time' },
        },
      },
      CreateTukTukRequest: {
        type: 'object',
        required: ['registrationNumber', 'policeStationId'],
        properties: {
          registrationNumber: { type: 'string', example: 'WP-4567' },
          name: { type: 'string', example: 'Green Rider' },
          policeStationId: { type: 'integer', example: 2 },
        },
      },
      Location: {
        type: 'object',
        properties: {
          id: { type: 'integer', example: 101 },
          tukTukId: { type: 'integer', example: 11 },
          latitude: { type: 'number', format: 'double', example: 6.9271 },
          longitude: { type: 'number', format: 'double', example: 79.8612 },
          recordedAt: { type: 'string', format: 'date-time' },
          createdAt: { type: 'string', format: 'date-time' },
          updatedAt: { type: 'string', format: 'date-time' },
        },
      },
      CreateLocationRequest: {
        type: 'object',
        required: ['latitude', 'longitude'],
        properties: {
          tukTukId: { type: 'integer', example: 11, description: 'Optional when device key is used' },
          latitude: { type: 'number', minimum: -90, maximum: 90, example: 6.9271 },
          longitude: { type: 'number', minimum: -180, maximum: 180, example: 79.8612 },
          recordedAt: { type: 'string', format: 'date-time' },
        },
      },
      Device: {
        type: 'object',
        properties: {
          id: { type: 'integer', example: 5 },
          name: { type: 'string', example: 'GPS Sensor 1' },
          keyId: { type: 'string', example: 'a1b2c3d4e5f6' },
          tukTukId: { type: 'integer', example: 11 },
          isRevoked: { type: 'boolean', example: false },
          rotatedAt: { type: 'string', format: 'date-time', nullable: true },
          createdAt: { type: 'string', format: 'date-time' },
          updatedAt: { type: 'string', format: 'date-time' },
        },
      },
      CreateDeviceRequest: {
        type: 'object',
        required: ['name', 'tukTukId'],
        properties: {
          name: { type: 'string', example: 'GPS Sensor 2' },
          tukTukId: { type: 'integer', example: 11 },
        },
      },
      DeviceKeyResponse: {
        type: 'object',
        properties: {
          device: { $ref: '#/components/schemas/Device' },
          apiKey: {
            type: 'string',
            example: 'a1b2c3d4e5f6.0f1e2d3c4b5a6978',
            description: 'Shown only once. Save securely.',
          },
        },
      },
      PaginationMeta: {
        type: 'object',
        properties: {
          page: { type: 'integer', example: 1 },
          limit: { type: 'integer', example: 20 },
          total: { type: 'integer', example: 200 },
          totalPages: { type: 'integer', example: 10 },
        },
      },
    },
  },
  paths: {
    '/api/status': {
      get: {
        tags: ['System'],
        summary: 'Service health status',
        responses: {
          200: {
            description: 'Service is running',
            content: {
              'application/json': {
                example: { status: 'ok' },
              },
            },
          },
        },
      },
    },
    '/auth/login': {
      post: {
        tags: ['Auth'],
        summary: 'Login and receive JWT',
        description: 'Use returned token as `Authorization: Bearer <token>` for protected endpoints.',
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: { $ref: '#/components/schemas/LoginRequest' },
              example: {
                email: 'admin@example.com',
                password: 'Secret123!',
              },
            },
          },
        },
        responses: {
          200: {
            description: 'Login successful',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/AuthResponse' },
                example: {
                  message: 'Login successful',
                  user: {
                    id: 1,
                    name: 'HQ Admin',
                    email: 'admin@example.com',
                    role: 'ADMIN',
                    districtId: null,
                  },
                  token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
                },
              },
            },
          },
          401: {
            description: 'Invalid credentials',
            content: { 'application/json': { schema: { $ref: '#/components/schemas/ErrorResponse' } } },
          },
        },
      },
    },
    '/auth/me': {
      get: {
        tags: ['Auth'],
        summary: 'Get authenticated principal',
        security: [{ bearerAuth: [] }],
        responses: {
          200: { description: 'Authenticated user payload' },
          401: { description: 'Unauthorized' },
        },
      },
    },
    '/auth/admin': {
      get: {
        tags: ['Auth'],
        summary: 'Admin-only check endpoint',
        security: [{ bearerAuth: [] }],
        responses: {
          200: { description: 'Admin access granted' },
          403: { description: 'Forbidden' },
        },
      },
    },
    '/users': {
      post: {
        tags: ['Users'],
        summary: 'Create user (authenticated; RBAC)',
        description:
          'Public self-registration is disabled. Use a JWT from an admin-tier account. Response returns created user only (no new token for the created user).',
        security: [{ bearerAuth: [] }],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: { $ref: '#/components/schemas/UserCreateRequest' },
            },
          },
        },
        responses: {
          201: {
            description: 'User created',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    message: { type: 'string' },
                    user: { $ref: '#/components/schemas/User' },
                  },
                },
              },
            },
          },
          400: {
            description: 'Validation error',
            content: { 'application/json': { schema: { $ref: '#/components/schemas/ErrorResponse' } } },
          },
          401: { description: 'Unauthorized' },
          403: { description: 'Forbidden (role cannot create target role or scope)' },
          409: {
            description: 'Email already exists',
            content: { 'application/json': { schema: { $ref: '#/components/schemas/ErrorResponse' } } },
          },
        },
      },
    },
    '/tuktuks': {
      post: {
        tags: ['TukTuk'],
        summary: 'Create TukTuk (ADMIN or POLICE)',
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
          400: { description: 'Validation error' },
          403: { description: 'POLICE district restriction violation' },
          404: { description: 'Police station not found' },
        },
      },
      get: {
        tags: ['TukTuk'],
        summary: 'List TukTuks with filters',
        description:
          'Geographic query params are AND-ed. SUPER_ADMIN/ADMIN: provinceId, districtId, policeStationId (must reference the same hierarchy). PROVINCE_ADMIN: districtId and/or policeStationId within their province only. DISTRICT_ADMIN: policeStationId within their district only. STATION_ADMIN and POLICE: geographic filters are not allowed.',
        security: [{ bearerAuth: [] }],
        parameters: [
          { in: 'query', name: 'provinceId', schema: { type: 'integer' } },
          { in: 'query', name: 'districtId', schema: { type: 'integer' } },
          { in: 'query', name: 'policeStationId', schema: { type: 'integer' } },
          { in: 'query', name: 'page', schema: { type: 'integer', default: 1 } },
          { in: 'query', name: 'limit', schema: { type: 'integer', default: 20 } },
        ],
        responses: {
          200: {
            description: 'Paginated TukTuk list',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    message: { type: 'string' },
                    data: { type: 'array', items: { $ref: '#/components/schemas/TukTuk' } },
                    pagination: { $ref: '#/components/schemas/PaginationMeta' },
                  },
                },
              },
            },
          },
          400: { description: 'Invalid geographic filter for role or inconsistent province/district/station' },
          403: { description: 'Filter references data outside your administrative scope' },
          404: { description: 'District or police station in filter not found' },
        },
      },
    },
    '/locations': {
      post: {
        tags: ['Location'],
        summary: 'Record location (JWT or device x-api-key)',
        description: 'Devices must use x-api-key and are restricted to this endpoint only.',
        security: [{ bearerAuth: [] }, { xApiKey: [] }],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: { $ref: '#/components/schemas/CreateLocationRequest' },
              examples: {
                jwtUserExample: {
                  summary: 'JWT-based location update',
                  value: {
                    tukTukId: 11,
                    latitude: 6.9271,
                    longitude: 79.8612,
                    recordedAt: '2026-05-01T09:30:00.000Z',
                  },
                },
                deviceExample: {
                  summary: 'Device location update with x-api-key',
                  value: {
                    latitude: 6.9278,
                    longitude: 79.8633,
                  },
                },
              },
            },
          },
        },
        responses: {
          201: {
            description: 'Location recorded',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    message: { type: 'string', example: 'Location recorded successfully' },
                    data: { $ref: '#/components/schemas/Location' },
                  },
                },
              },
            },
          },
          400: { description: 'Validation error' },
          401: { description: 'Invalid API key or JWT' },
          403: { description: 'POLICE district restriction violation' },
          404: { description: 'TukTuk not found' },
        },
      },
    },
    '/locations/live': {
      get: {
        tags: ['Location'],
        summary: 'Get latest location per TukTuk',
        description:
          'Same geographic filter rules as GET /tuktuks (provinceId, districtId, policeStationId AND-ed where allowed by role).',
        security: [{ bearerAuth: [] }],
        parameters: [
          { in: 'query', name: 'provinceId', schema: { type: 'integer' } },
          { in: 'query', name: 'districtId', schema: { type: 'integer' } },
          { in: 'query', name: 'policeStationId', schema: { type: 'integer' } },
          { in: 'query', name: 'tukTukId', schema: { type: 'integer' } },
        ],
        responses: {
          200: { description: 'Live locations fetched' },
          400: { description: 'Invalid geographic filter for role' },
          401: { description: 'Unauthorized' },
        },
      },
    },
    '/locations/history': {
      get: {
        tags: ['Location'],
        summary: 'Get location history',
        description:
          'Same geographic filter rules as GET /tuktuks. Optional recordedAtFrom / recordedAtTo (ISO8601) narrow by time.',
        security: [{ bearerAuth: [] }],
        parameters: [
          { in: 'query', name: 'provinceId', schema: { type: 'integer' } },
          { in: 'query', name: 'districtId', schema: { type: 'integer' } },
          { in: 'query', name: 'policeStationId', schema: { type: 'integer' } },
          { in: 'query', name: 'tukTukId', schema: { type: 'integer' } },
          { in: 'query', name: 'recordedAtFrom', schema: { type: 'string', format: 'date-time' } },
          { in: 'query', name: 'recordedAtTo', schema: { type: 'string', format: 'date-time' } },
          { in: 'query', name: 'page', schema: { type: 'integer', default: 1 } },
          { in: 'query', name: 'limit', schema: { type: 'integer', default: 20 } },
        ],
        responses: {
          200: { description: 'Location history fetched' },
          400: { description: 'Invalid geographic filter for role' },
          401: { description: 'Unauthorized' },
        },
      },
    },
    '/policestations': {
      post: {
        tags: ['PoliceStation'],
        summary: 'Create police station (SUPER_ADMIN only)',
        security: [{ bearerAuth: [] }],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: { $ref: '#/components/schemas/CreatePoliceStationRequest' },
            },
          },
        },
        responses: {
          201: {
            description: 'Police station created',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/PoliceStation' },
              },
            },
          },
          400: { description: 'Validation error' },
          403: { description: 'Forbidden' },
        },
      },
      get: {
        tags: ['PoliceStation'],
        summary: 'List police stations (SUPER_ADMIN only)',
        security: [{ bearerAuth: [] }],
        parameters: [
          { in: 'query', name: 'provinceId', schema: { type: 'integer' } },
          { in: 'query', name: 'districtId', schema: { type: 'integer' } },
          { in: 'query', name: 'page', schema: { type: 'integer', default: 1 } },
          { in: 'query', name: 'limit', schema: { type: 'integer', default: 25 } },
        ],
        responses: {
          200: { description: 'Police station list fetched' },
          401: { description: 'Unauthorized' },
          403: { description: 'Forbidden' },
        },
      },
    },
    '/policestations/{id}': {
      get: {
        tags: ['PoliceStation'],
        summary: 'Get police station by id (SUPER_ADMIN only)',
        security: [{ bearerAuth: [] }],
        parameters: [{ in: 'path', name: 'id', required: true, schema: { type: 'integer' } }],
        responses: {
          200: { description: 'Police station fetched' },
          403: { description: 'Forbidden' },
          404: { description: 'Not found' },
        },
      },
      put: {
        tags: ['PoliceStation'],
        summary: 'Update police station (SUPER_ADMIN only)',
        security: [{ bearerAuth: [] }],
        parameters: [{ in: 'path', name: 'id', required: true, schema: { type: 'integer' } }],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: { $ref: '#/components/schemas/CreatePoliceStationRequest' },
            },
          },
        },
        responses: {
          200: { description: 'Police station updated' },
          400: { description: 'Validation error' },
          403: { description: 'Forbidden' },
          404: { description: 'Not found' },
        },
      },
      delete: {
        tags: ['PoliceStation'],
        summary: 'Delete police station (SUPER_ADMIN only)',
        security: [{ bearerAuth: [] }],
        parameters: [{ in: 'path', name: 'id', required: true, schema: { type: 'integer' } }],
        responses: {
          204: { description: 'Deleted' },
          403: { description: 'Forbidden' },
          404: { description: 'Not found' },
        },
      },
    },
    '/devices': {
      post: {
        tags: ['Device'],
        summary: 'Create device and return one-time apiKey (ADMIN)',
        security: [{ bearerAuth: [] }],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: { $ref: '#/components/schemas/CreateDeviceRequest' },
            },
          },
        },
        responses: {
          201: {
            description: 'Device created',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/DeviceKeyResponse' },
              },
            },
          },
          400: { description: 'Validation error' },
          403: { description: 'Forbidden' },
        },
      },
      get: {
        tags: ['Device'],
        summary: 'List devices (ADMIN)',
        security: [{ bearerAuth: [] }],
        parameters: [
          { in: 'query', name: 'tukTukId', schema: { type: 'integer' } },
          { in: 'query', name: 'page', schema: { type: 'integer', default: 1 } },
          { in: 'query', name: 'limit', schema: { type: 'integer', default: 25 } },
        ],
        responses: {
          200: { description: 'Device list fetched' },
          403: { description: 'Forbidden' },
        },
      },
    },
    '/devices/{id}': {
      get: {
        tags: ['Device'],
        summary: 'Get device by id (ADMIN)',
        security: [{ bearerAuth: [] }],
        parameters: [{ in: 'path', name: 'id', required: true, schema: { type: 'integer' } }],
        responses: {
          200: { description: 'Device fetched' },
          404: { description: 'Not found' },
        },
      },
      delete: {
        tags: ['Device'],
        summary: 'Delete device (ADMIN)',
        security: [{ bearerAuth: [] }],
        parameters: [{ in: 'path', name: 'id', required: true, schema: { type: 'integer' } }],
        responses: {
          204: { description: 'Deleted' },
          404: { description: 'Not found' },
        },
      },
    },
    '/devices/{id}/rotate': {
      post: {
        tags: ['Device'],
        summary: 'Rotate device apiKey (ADMIN)',
        security: [{ bearerAuth: [] }],
        parameters: [{ in: 'path', name: 'id', required: true, schema: { type: 'integer' } }],
        responses: {
          200: {
            description: 'New one-time apiKey returned',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/DeviceKeyResponse' },
              },
            },
          },
          404: { description: 'Not found' },
        },
      },
    },
    '/devices/{id}/revoke': {
      post: {
        tags: ['Device'],
        summary: 'Revoke device apiKey (ADMIN)',
        security: [{ bearerAuth: [] }],
        parameters: [{ in: 'path', name: 'id', required: true, schema: { type: 'integer' } }],
        responses: {
          200: {
            description: 'Revoked',
            content: {
              'application/json': {
                example: { message: 'Device key revoked' },
              },
            },
          },
          404: { description: 'Not found' },
        },
      },
    },
  },
};

module.exports = swaggerDocument;
