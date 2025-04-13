const knex = require('../config/data');

class PermissionsService {
  static async getAll() {
    return await knex('permissions').select('*');
  }
}

module.exports = PermissionsService;