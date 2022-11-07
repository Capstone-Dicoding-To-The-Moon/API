const { getRole, getRoleById, addRole } = require('../handlers/roleHandlers');
const { routesHelper } = require('../routesHelper');

const routesRole = [
  routesHelper('GET', '/roles', getRole),
  routesHelper('GET', '/roles/{id}', getRoleById),
  routesHelper('POST', '/roles', addRole),
];

module.exports = routesRole;
