//"https://api.github.com/repos/johnno1962/Refactorator/collaborators{/collaborator}"
//commitsURL = commitsURL.slice(0, commitsURL.length - 6);
var secret = require('../splash/tempsecret.js');
var request = require('request');

var secretURL = '&client_id=' + secret.id + '&client_secret=' + secret.secret;


function gitHTTP(method, reqString, cb){
  request({
    uri: reqString + secretURL,
    method: method,
    headers: {'user-agent': 'node.js'}
  }, cb);
}

module.exports = function(body, res){


  res.send(JSON.parse(body).items);

};
