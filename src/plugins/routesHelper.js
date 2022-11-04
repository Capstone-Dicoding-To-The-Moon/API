const routesHelper = (method, path, handler) => {
  return {
    method,
    path,
    handler,
  };
};

module.exports = { routesHelper };
