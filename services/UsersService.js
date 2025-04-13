const knex = require('../config/data');

class UsersService {
  static async create(userData) {
    const exists = await knex('users')
      .where({ email: userData.email })
      .first();
    
    if (exists) throw new Error("Usuário com este email já existe");

    const [id] = await knex('users').insert(userData);
    return { id, ...userData };
  }
}

module.exports = UsersService;