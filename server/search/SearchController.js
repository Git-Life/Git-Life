var path = require('path');
var request = require('request');
var userParse = require('./userController.js');
var secret = {};
if(process.env.NODE_ENV === 'development'){
  secret = require('../splash/tempsecret.js');
}
else if(process.env.NODE_ENV === 'production'){
  secret.id= process.env.GIT_ID;
  secret.secret= process.env.GIT_KEY;
}


var root = 'https://api.github.com/';

var secretURL = '&client_id=' + secret.id + '&client_secret=' + secret.secret;


function gitHTTP(method, reqString, cb){
  request({
    uri: reqString + secretURL,
    method: method,
    headers: {'user-agent': 'node.js'}
  }, cb);
}

function filterByLanguage(body, lang) {
  var filteredRepos = [];
  if(body.items){
    for(var i = 0; i < body.items.length; i++){
      //console.log(body.items[i].language);
      if(body.items[i].language && 
        (lang && (body.items[i].language.toLowerCase() === lang.toLowerCase() || lang === 'All'))){
        filteredRepos.push(body.items[i]);
      }
    }
  }
  return filteredRepos;
}

module.exports = {
	getRepos: function (req, res) {
		var query = req.query.searchTerm;
    gitHTTP('GET', root + 'search/repositories?q=' + query + 'in:description&sort=stars&order=desc',
     function (error, response, body) {
			if(error){
        console.log('Error: ', error);
      }
      var newBody = filterByLanguage(JSON.parse(body), req.query.language);
      userParse(newBody, res);
		});
	},
	getUsers: function (req, res) {
		var query = req.query.searchTerm;
		request({
			uri: root + 'search/repositories?q=' + query + 'in:description&sort=stars&order=desc',
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
      uri: root + 'search/issues?q=' + query + 'state:open',
      method: 'GET',
      header: {'user-agent': 'node.js'}
    }, function(error, response, body){
      if(error){
        console.log('Error: ', error);
      }
      res.send(JSON.parse(body).items);
    });
	}

};
