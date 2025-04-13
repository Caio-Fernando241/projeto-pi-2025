const { body, validationResult } = require('express-validator');

const validateUser = [
  body('name').notEmpty().withMessage('Nome é obrigatório'),
  body('email').isEmail().withMessage('Email inválido'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];

module.exports = { validateUser };