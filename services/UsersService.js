const knex = require('../config/data');

class UsersService {
  static async getAll() {
    try {
      const users = await knex('users').select('*');
      if (users.length === 0) throw new Error("Nenhum usuário encontrado");
      return users;
    } catch (error) {
      throw new Error(`Erro ao buscar usuários: ${error.message}`);
    }
  }

  static async create(userData) {
    try {
      const existingUser = await knex('users')
        .where({ email: userData.email })
        .first();
      
      if (existingUser) {
        throw new Error("Usuário com este email já existe");
      }

      const [id] = await knex('users').insert(userData);
      return { id, ...userData };
    } catch (error) {
      throw new Error(`Erro ao criar usuário: ${error.message}`);
    }
  }
}

module.exports = UsersService;