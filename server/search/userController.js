var secret = require('../splash/tempsecret.js');
var request = require('request');
var async = require('async');

var secretURL = '&client_id=' + secret.id + '&client_secret=' + secret.secret;

function gitHTTP(method, reqString, cb){
  request({
    uri: reqString + secretURL,
    method: method,
    headers: {'user-agent': 'node.js'}
  }, cb);
}

var userObj = {};

module.exports = function(body, res){
  var items =   JSON.parse(body).items;
  items = items.slice(0, 10);

  async.forEachOf(items, function (value, key, callback) {
    gitHTTP('GET', items[key].contributors_url + '?', function(err, response, contributors){
      if(err){
        return callback(err);
      }
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

      res.send(sendObj);
  })

};
