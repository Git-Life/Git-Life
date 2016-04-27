var path = require('path');
var request = require('request');
//res.sendFile(path.resolve('temp/index.html'));

var root = 'https://api.github.com/';

module.exports = {
	//create methods here that supply logic for SearchRouter.js
	getRepos: function (req, res) {
		var query = req.query.searchTerm;
		request({
			uri: root + 'search/repositories?q=' + query,
			method: 'GET',
      headers: {'user-agent': 'node.js'}

      

		}, function (error, response, body) {
			console.log('Successful request to GitHub repo search! ', JSON.parse(body).items);
			//console.log('Error: ', error);
			res.send(JSON.parse(body).items);
		});
	},

	getCode: function (req, res) {

	},

	getIssues: function (req, res) {

	},

	getUsers: function (req, res) {

	}

};
