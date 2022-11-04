const {
  getUser,
  getUserById,
  addUser,
  updateUser,
  deleteUser,
} = require('../handlers/userHandlers');
const { routesHelper } = require('../routesHelper');

const routesUser = [
  routesHelper('GET', '/user', getUser),
  routesHelper('GET', '/user/{id}', getUserById),
  routesHelper('PUT', '/user', updateUser),
  routesHelper('DELETE', '/user', deleteUser),
  routesHelper('POST', '/user', addUser),
];
module.exports = routesUser;
