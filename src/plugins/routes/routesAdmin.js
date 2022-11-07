const {
  addAdmin,
  getAllAdmin,
  getAdminById,
  updateAdmin,
  deleteAdmin,
} = require('../handlers/adminHandlers');
const { routesHelper } = require('../routesHelper');

const routesAdmin = [
  routesHelper('GET', '/admin', getAllAdmin),
  routesHelper('GET', '/admin/{id}', getAdminById),
  routesHelper('PUT', '/admin', updateAdmin),
  routesHelper('DELETE', '/admin', deleteAdmin),
  routesHelper('POST', '/admin', addAdmin),
];
module.exports = routesAdmin;
