var path = require('path');
var request = require('request');

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
			if(error){
        console.log('Error: ', error);
      }
			res.send(JSON.parse(body).items);
		});
	},

	getCode: function (req, res) {
		var query = req.query.searchTerm;
		request({
			uri: root + 'search/code?q=' + query,
			method: 'GET',
      headers: {'user-agent': 'node.js'}
		}, function (error, response, body) {
      if(error){
        console.log('Error: ', error);

      }
			res.send(JSON.parse(body).items);
		});
	},

	getIssues: function (req, res) {
    var query = req.query.searchTerm;
    request({
      uri: root + 'search/issues?q=' + query,
      method: 'GET',
      header: {'user-agent': 'node.js'}
    }, function(error, response, body){
      if(error){
        console.log('Error: ', error);
      }
      res.send(JSON.parse(body).items);
    });
	},

	getUsers: function (req, res) {
		var query = req.query.searchTerm;
		request({
			uri: root + 'search/users?q=' + query,
			method: 'GET',
			headers: {'user-agent': 'node.js'}
		}, function (error, response, body) {
      if(error){
        console.log('Error: ', error);
      }
			res.send(JSON.parse(body).items);
		});
	}
};
