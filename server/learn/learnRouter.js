teachController = require('./teachController.js');
issuesController = require('./issuesController.js');

module.exports = function(app){
  app.get('/inquire', teachController.inquire);
  app.get('/issues', issuesController);
  app.post('/teach', teachController.instruct);
}
