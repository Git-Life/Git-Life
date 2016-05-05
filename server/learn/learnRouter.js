teachController = require('./teachController.js');
issuesController = require('./issuesController.js');

module.exports = function(app){
  app.get('/teach', teachController);
  app.get('/issues', issuesController);
}
