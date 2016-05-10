var request = require('request');
var async = require('async');
var orgParse = require('./orgController.js');
var secret = {};
if(process.env.NODE_ENV === 'development'){
  secret = require('../splash/tempsecret.js');
}
else if(process.env.NODE_ENV === 'production'){
  secret.id= process.env.GIT_ID;
  secret.secret= process.env.GIT_KEY;
}


var secretURL = '&client_id=' + secret.id + '&client_secret=' + secret.secret;

function gitHTTP(method, reqString, cb){
  request({
    uri: reqString + secretURL,
    method: method,
    headers: {'user-agent': 'node.js'}
  }, cb);
}


module.exports = function(body, res){
  var items =   JSON.parse(body).items;
  var itemGroup = items.slice(0, 10);
  var userObj = {};

  async.forEachOf(itemGroup, function (value, key, callback) {
    gitHTTP('GET', itemGroup[key].contributors_url + '?', function(err, response, contributor){
      if(err){
        return callback(err);
      }
<<<<<<< 0471253c32d8ef3d5d4f3074009bf54b8121adfc
<<<<<<< 133ee12080d90cdbeee67fcb4e07b454813fd16d
<<<<<<< 8d08fcc7165d945bdaf91451ce808dc70f46e327
<<<<<<< d04bb68c37244ed176ff0c304e867379d8699442
<<<<<<< fc008dbba49b574ea7d9f207119bc751038888ce

      contributors = JSON.parse(contributors);
      contributors.forEach(function(element, index){
        if (userObj[element.login]){
          userObj[element.login].count++;
          userObj[element.login].contributions += element.contributions;
        }
        else{
          userObj[element.login] = {
            name : element.login,
            id: element.id,
            url: element.url,
            count: 1,
            contributions: element.contributions
          }
        }
      });
      callback();
    });
  }, function (err) {
      if (err) console.error(err.message);

      var userArr = Object.keys(userObj).map(function (key) {return userObj[key]});
      var sendObj = {
        items: items,
        contributors: userArr
      }

      orgParse.getOrgs(sendObj, res);
  });
};
