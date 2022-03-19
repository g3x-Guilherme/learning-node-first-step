const UserController = require("./controllers/UserController")

module.exports = [
  
  {
    endpoint: '/users/:id',
    method: 'GET',
    handler: UserController.getUserById,
  },
];

/**{
    endpoint: '/users',
    method: 'GET',
    handler: UserController.listUsers,
  }, */