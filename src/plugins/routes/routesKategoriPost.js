const {
  getKategoriPost,
  getKategoriPostById,
  addKategoriPost,
} = require('../handlers/kategoriPostHandlers');
const { routesHelper } = require('../routesHelper');

const routesKategoriPost = [
  routesHelper('GET', '/kategori_post', getKategoriPost),
  routesHelper('GET', '/kategori_post/{id}', getKategoriPostById),
  routesHelper('POST', '/kategori_post', addKategoriPost),
];

module.exports = routesKategoriPost;
