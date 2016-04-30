var trendReposController = require('./trendReposController.js');
var commitsController    = require('./commitsController.js');


module.exports = function (router) {
  router.get('/repos', trendReposController);
  router.get('/commitData', commitsController);

};
