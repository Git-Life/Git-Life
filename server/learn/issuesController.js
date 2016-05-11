var request = require('request');
var root = 'https://api.github.com/';

var secret = {};
if(process.env.NODE_ENV === 'development'){
  secret = require('../splash/tempsecret.js');
}
else if(process.env.NODE_ENV === 'production'){
   secret.id= process.env.GIT_ID;
   secret.secret= process.env.GIT_KEY;
}

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
  gitHTTP('GET', issuesURL.slice(0, issuesURL.length-9), (err, response, body)=>{
    if(err){
      console.log('err is', err);
    }
    res.send(body);
  });
}
