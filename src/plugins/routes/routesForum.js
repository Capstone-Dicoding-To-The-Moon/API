const {
  getAllForum,
  getForumById,
  addForum,
  getAllForumWithMuchUpVotes,
  getAllForumWithOrderDate,
  getForumByCategories,
  getForumWithDiscussionById,
  updateForum,
  updateUpVote,
  updateDownVote,
  deleteForumById,
} = require('../handlers/forumHandlers');
const { routesHelper } = require('../routesHelper');

const routesForum = [
  routesHelper('GET', '/forum', getAllForum),
  routesHelper('GET', '/forum/{id}', getForumById),
  routesHelper('GET', '/forumVotes', getAllForumWithMuchUpVotes),
  routesHelper('GET', '/forumDates', getAllForumWithOrderDate),
  routesHelper('GET', '/forumCat/{id}', getForumByCategories),
  routesHelper('GET', '/forumDis/{id}', getForumWithDiscussionById),
  routesHelper('PUT', '/forum', updateForum),
  routesHelper('PUT', '/forumUpVote', updateUpVote),
  routesHelper('PUT', '/forumDownVote', updateDownVote),
  routesHelper('DELETE', '/forum', deleteForumById),
  routesHelper('POST', '/forum', addForum),
];

module.exports = routesForum;
