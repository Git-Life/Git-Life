var trendReposController = require('./trendReposController.js');


module.exports = function (router) {
  router.get('/repos', trendReposController);

};
