const { getAllLogOrderByIdDescending } = require('../handlers/logHandlers');
const { routesHelper } = require('../routesHelper');

const routesLog = [routesHelper('GET', '/log', getAllLogOrderByIdDescending)];
module.exports = routesLog;
