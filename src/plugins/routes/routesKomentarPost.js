const {
  getKomentarPost,
  getKomentarPostById,
  addKomentarPost,
  deleteKomentarPost,
  updateKomentarPost,
  updateUpVoteKomentarPost,
  updateDownVoteKomentarPost,
} = require('../handlers/komentarPostHandlers');
const {
  routesHelper,
  routesHelperWithoutAuth,
} = require('../helpers/routesHelper');

const routesKomentarPost = [
  routesHelperWithoutAuth('GET', '/komentar_post', getKomentarPost), // everyone
  routesHelperWithoutAuth('GET', '/komentar_post/{id}', getKomentarPostById), // everyone
  routesHelper('PUT', '/komentar_post', updateKomentarPost), // user
  routesHelper('PUT', '/komentar_post_up_vote', updateUpVoteKomentarPost), // user
  routesHelper('PUT', '/komentar_post_down_vote', updateDownVoteKomentarPost), // user
  routesHelper('DELETE', '/komentar_post', deleteKomentarPost), // user
  routesHelper('POST', '/komentar_post', addKomentarPost), // user
];

module.exports = routesKomentarPost;
