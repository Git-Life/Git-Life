var trendReposController = require('./trendReposController.js');
var topicsController = require('./topicsController');

module.exports = function (router) {
  router.get('/repos', trendReposController);
  router.get('/rss', topicsController.getFeed);
};
