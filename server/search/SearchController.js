var path = require('path');
var request = require('request');
//res.sendFile(path.resolve('temp/index.html'));

var root = 'https://www.api.github.com/';

module.exports = {
	//create methods here that supply logic for SearchRouter.js
	getRepos: function (req, res) {
		var query = req.query.searchTerm;
		console.log('request to server: ', req.query);
		request({
			uri: root + 'search/repositories',
			method: 'GET'
		}, function (error, response, body) {
			console.log('Successful request to GitHub repo search! ', response);
		});
	},

	getCode: function (req, res) {

	},

	getIssues: function (req, res) {

	},

	getUsers: function (req, res) {

	}

};
