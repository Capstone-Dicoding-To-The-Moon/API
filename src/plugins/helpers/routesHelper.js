const routesHelper = (method, path, handler) => {
  return {
    method,
    path,
    handler,
  };
};

/*
  await axios.put(`http://localhost:5000/products/${id}`, formData, {
        headers: {
          "Content-type": "multipart/form-data",
        },
      });
*/

// https://mfikri.com/artikel/crud-upload-express-reactjs

const routesHelperStream = (method, path, handler) => {
  const route = {
    method,
    path,
    handler,
    options: {
      payload: {
        output: 'stream',
        parse: true,
        allow: ['multipart/form-data'],
        maxBytes: 5 * 1024 * 1024,
        multipart: true,
      },
    },
  };

  return route;
};

const routesHelperStreamWithoutAuth = (method, path, handler) => {
  const route = {
    method,
    path,
    handler,
    options: {
      payload: {
        output: 'stream',
        parse: true,
        allow: ['multipart/form-data'],
        maxBytes: 5 * 1024 * 1024,
        multipart: true,
      },
      auth: false,
    },
  };

  return route;
};

const routesHelperWithoutAuth = (method, path, handler) => {
  return {
    method,
    path,
    handler,
    options: {
      auth: false,
    },
  };
};

module.exports = {
  routesHelper,
  routesHelperStream,
  routesHelperWithoutAuth,
  routesHelperStreamWithoutAuth,
};
