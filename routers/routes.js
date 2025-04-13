const express = require('express');
const router = express.Router();
const ListUsers = require('../controllers/users/listUsers');
const UserController = require('../controllers/users/userController');
const { validateUser } = require('../middlewares/validators');

router.get('/users', ListUsers.getAll);
router.post('/users', validateUser, UserController.create);

module.exports = router;