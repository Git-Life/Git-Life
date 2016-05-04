teachController = require('./teachController.js');

module.exports = function(app){
  app.get('/teach', teachController);
}
