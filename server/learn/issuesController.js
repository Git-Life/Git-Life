var request = require('request');
var secret = require('../splash/tempsecret.js');

var root = 'https://api.github.com/';

var secretURL = '?client_id=' + secret.id + '&client_secret=' + secret.secret;

function gitHTTP(method, reqString, cb){
  request({
    uri: reqString + secretURL,
    method: method,
    headers: {'user-agent': 'node.js'}
  }, cb);
}


module.exports = function(req, res){
  var issuesURL = req.query.issuesURL;
  console.log(issuesURL);
  gitHTTP('GET', issuesURL.slice(0, issuesURL.length-9), (err, response, body)=>{
    if(err){
      console.log('err is', err);
    }
    res.send(body);
  });
}
