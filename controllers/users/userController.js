const UsersService = require('../../services/UsersService');

class UserController {
  static async create(req, res, next) {
    try {
      const newUser = await UsersService.create(req.body);
      res.status(201).json(newUser);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = UserController;