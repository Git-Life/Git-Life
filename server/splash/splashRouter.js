var trendReposController  = require('./trendReposController.js');
var trendOrgsController   = require('./trendOrgsController.js');
var commitsController     = require('./commitsController.js');
var topicsController      = require('./topicsController');
var newReposController    = require('./newReposController');


module.exports = function (router) {
  router.get('/repos', trendReposController);
  router.get('/commitData', commitsController);
  router.get('/rsswired', topicsController.getWiredFeed);
  router.get('/rssdata', topicsController.getDataFeed);
  router.get('/rsshn', topicsController.getHNFeed);
  router.get('/orgs', trendOrgsController.getRepresentedOrgs);
  router.get('/newRepos', newReposController.getNewRepos);
  //router.get('/newOrgs');
};
