const {
  getAllPost,
  getPostWithCommentById,
  getPostWithPopularCommentById,
  getAllPostWithOrderDate,
  getPostByCategories,
  updatePost,
  deletePostById,
  addPost,
} = require('../handlers/postHandlers');
const { routesHelper } = require('../routesHelper');

const routesPost = [
  routesHelper('GET', '/posts', getAllPost),
  routesHelper('GET', '/postsDates', getAllPostWithOrderDate),
  routesHelper('GET', '/posts/{id}', getPostWithCommentById),
  routesHelper('GET', '/popular/{id}', getPostWithPopularCommentById),
  routesHelper('GET', '/postsCat/{id}', getPostByCategories),
  routesHelper('PUT', '/posts', updatePost),
  routesHelper('DELETE', '/posts', deletePostById),
  routesHelper('POST', '/posts', addPost),
  //   routesHelper('POST', '/user', addUser),
];
module.exports = routesPost;
