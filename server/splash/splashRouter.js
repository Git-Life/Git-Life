var trendReposController = require('./trendReposController.js');
var commitsController    = require('./commitsController.js');
var topicsController     = require('./topicsController');



module.exports = function (router) {
  router.get('/repos', trendReposController);
  router.get('/commitData', commitsController);
  router.get('/rsswired', topicsController.getWiredFeed);
  router.get('/rssdata', topicsController.getDataFeed);
};
