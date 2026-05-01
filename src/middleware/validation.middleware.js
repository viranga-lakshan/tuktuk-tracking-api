const { body, param, query, validationResult } = require('express-validator');

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

const authRegisterRules = [
  body('name').trim().notEmpty().withMessage('name is required'),
  body('email').trim().isEmail().withMessage('valid email is required'),
  body('password').isLength({ min: 8 }).withMessage('password must be at least 8 characters'),
  body('role').optional().isIn(['ADMIN', 'POLICE']).withMessage('role must be ADMIN or POLICE'),
  body('districtId').optional().isInt().withMessage('districtId must be integer'),
];

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

const policeStationRules = [
  body('name').trim().notEmpty().withMessage('name is required'),
  body('districtId').notEmpty().isInt().withMessage('districtId is required and must be integer'),
  body('address').optional().trim(),
];

module.exports = {
  validate,
  authRegisterRules,
  authLoginRules,
  locationRules,
  tukTukRules,
  policeStationRules,
};
