const { body, validationResult } = require('express-validator');
const knex = require('../config/data'); // Adicione esta linha no TOPO do arquivo

const validateUser = [
  body('name').notEmpty().withMessage('Nome é obrigatório'),
  body('email')
    .isEmail().withMessage('Email inválido')
    // Adicione este bloco APÓS a validação de email:
    .custom(async (email) => {
      const user = await knex('users').where({ email }).first();
      if (user) throw new Error('Email já está em uso');
    }),
    
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];

module.exports = { validateUser };