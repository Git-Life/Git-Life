var path = require('path');
var request = require('request');
var secret = require('../splash/tempsecret.js');


var root = 'https://api.github.com/';

var secretURL = '&client_id=' + secret.id + '&client_secret=' + secret.secret;


function gitHTTP(method, reqString, cb){
  request({
    uri: reqString + secretURL,
    method: method,
    headers: {'user-agent': 'node.js'}
  }, cb);
}

module.exports = {
	getRepos: function (req, res) {
		var query = req.query.searchTerm;
    console.log('this is query', query);
    gitHTTP('GET', root + 'search/repositories?q=' + query,
     function (error, response, body) {
			if(error){
        console.log('Error: ', error);
      }
      console.log(body);
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
