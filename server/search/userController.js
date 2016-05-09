var secret = require('../splash/tempsecret.js');
var request = require('request');
var async = require('async');
var orgParse = require('./orgController.js');

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
      var contributors = JSON.parse(contributor);
      console.log(contributors.length)
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
