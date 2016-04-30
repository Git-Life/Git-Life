var trendReposController = require('./trendReposController.js');


module.exports = function (router) {
  //router.get('/repos', trendReposController);
  router.get('/repos', function(req, res){
    console.log('we got a request');
    res.send('hello');
  })
};
