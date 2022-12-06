const {
  addAdmin,
  getAllAdmin,
  updateAdmin,
  deleteAdmin,
  getImage,
  adminLogin,
} = require('../handlers/adminHandlers');
const { getUserDetail, getUserById } = require('../handlers/userHandlers');
const {
  routesHelper,
  routesHelperStream,
  routesHelperWithoutAuth,
} = require('../helpers/routesHelper');

// Cuma bisa diliat admin
const routesAdmin = [
  routesHelper('GET', '/admin', getAllAdmin), // admin
  routesHelper('GET', '/admin/{id}', getUserById), // admin
  routesHelper('GET', '/admin/detail', getUserDetail), // admin
  routesHelperWithoutAuth('GET', '/admin/image/{name}', getImage), // everyone
  routesHelperStream('PUT', '/admin', updateAdmin), // admin
  routesHelper('DELETE', '/admin', deleteAdmin), // admin
  routesHelperStream('POST', '/admin', addAdmin), // admin
  routesHelperWithoutAuth('POST', '/admin-login', adminLogin), // everyone
];
module.exports = routesAdmin;
