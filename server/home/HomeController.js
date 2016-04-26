var path = require('path');
//res.sendFile(path.resolve('temp/index.html'));

module.exports = {
	//create methods here that supply logic for HomeRouter.js
	serverTest: function(req, res){
    res.sendFile(path.resolve(__dirname + '/../../dist/index.html'));
  }


};
