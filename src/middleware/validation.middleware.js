const { body, param, query, validationResult } = require('express-validator');
const { ROLES } = require('../constants/roles');

function validate(rules) {
  return [
    ...rules,
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      return next();
    },
  ];
}

const authLoginRules = [
  body('email').trim().isEmail().withMessage('valid email is required'),
  body('password').notEmpty().withMessage('password is required'),
];

const locationRules = [
  body('tukTukId').optional().isInt().withMessage('tukTukId must be integer'),
  body('latitude').notEmpty().withMessage('latitude is required').isFloat({ min: -90, max: 90 }).withMessage('latitude must be between -90 and 90'),
  body('longitude').notEmpty().withMessage('longitude is required').isFloat({ min: -180, max: 180 }).withMessage('longitude must be between -180 and 180'),
  body('recordedAt').optional().isISO8601().withMessage('recordedAt must be ISO8601'),
];

const tukTukRules = [
  body('registrationNumber').trim().notEmpty().withMessage('registrationNumber is required'),
  body('policeStationId').notEmpty().isInt().withMessage('policeStationId is required and must be integer'),
  body('name').optional().trim(),
];

const tukTukUpdateRules = [
  body('registrationNumber').optional().trim().notEmpty().withMessage('registrationNumber cannot be empty'),
  body('policeStationId').optional().isInt().withMessage('policeStationId must be integer'),
  body('name').optional({ nullable: true }).trim(),
];

const policeStationRules = [
  body('name').trim().notEmpty().withMessage('name is required'),
  body('districtId').notEmpty().isInt().withMessage('districtId is required and must be integer'),
  body('address').optional().trim(),
];

const deviceCreateRules = [
  body('name').trim().notEmpty().withMessage('name is required'),
  body('tukTukId').notEmpty().isInt().withMessage('tukTukId is required and must be integer'),
];

const idParamRule = [
  param('id').isInt().withMessage('id must be an integer'),
];

const tukTukIdParamRule = [
  param('tukTukId').isInt().withMessage('tukTukId must be an integer'),
];

const listFilterRules = [
  query('provinceId').optional().isInt().withMessage('provinceId must be integer'),
  query('districtId').optional().isInt().withMessage('districtId must be integer'),
  query('policeStationId').optional().isInt().withMessage('policeStationId must be integer'),
  query('tukTukId').optional().isInt().withMessage('tukTukId must be integer'),
  query('recordedAtFrom').optional().isISO8601().withMessage('recordedAtFrom must be ISO8601'),
  query('recordedAtTo').optional().isISO8601().withMessage('recordedAtTo must be ISO8601'),
  query('page').optional().isInt({ min: 1 }).withMessage('page must be integer >= 1'),
  query('limit').optional().isInt({ min: 1, max: 100 }).withMessage('limit must be integer between 1 and 100'),
];

const userListFilterRules = [
  query('provinceId').optional().isInt().withMessage('provinceId must be integer'),
  query('districtId').optional().isInt().withMessage('districtId must be integer'),
  query('stationId').optional().isInt().withMessage('stationId must be integer'),
  query('page').optional().isInt({ min: 1 }).withMessage('page must be integer >= 1'),
  query('limit').optional().isInt({ min: 1, max: 100 }).withMessage('limit must be integer between 1 and 100'),
];

const userCreateRules = [
  body('name').trim().notEmpty().withMessage('name is required'),
  body('email').trim().isEmail().withMessage('valid email is required'),
  body('password').isLength({ min: 8 }).withMessage('password must be at least 8 characters'),
  body('role').optional().trim().isIn(ROLES).withMessage('invalid role'),
  body('provinceId').optional({ nullable: true }).isInt().withMessage('provinceId must be integer'),
  body('districtId').optional({ nullable: true }).isInt().withMessage('districtId must be integer'),
  body('stationId').optional({ nullable: true }).isInt().withMessage('stationId must be integer'),
];

const userUpdateRules = [
  body('name').optional().trim().notEmpty().withMessage('name cannot be empty'),
  body('email').optional().trim().isEmail().withMessage('valid email is required'),
  body('password').optional({ values: 'falsy' }).isLength({ min: 8 }).withMessage('password must be at least 8 characters'),
  body('role').optional().trim().isIn(ROLES).withMessage('invalid role'),
  body('provinceId').optional({ nullable: true }).isInt().withMessage('provinceId must be integer'),
  body('districtId').optional({ nullable: true }).isInt().withMessage('districtId must be integer'),
  body('stationId').optional({ nullable: true }).isInt().withMessage('stationId must be integer'),
];

module.exports = {
  validate,
  authLoginRules,
  locationRules,
  tukTukRules,
  tukTukUpdateRules,
  policeStationRules,
  deviceCreateRules,
  idParamRule,
  tukTukIdParamRule,
  listFilterRules,
  userListFilterRules,
  userCreateRules,
  userUpdateRules,
};
