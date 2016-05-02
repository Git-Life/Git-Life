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

var userObj = {};

module.exports = function(body, res){
  var items =   JSON.parse(body).items;
  for(var i = 0; i < 10; i++){

    gitHTTP('GET', items[i].contributors_url + '?', function(err, response, contributors){
      if(err){
        console.log("Error in userController GIT request", err);
      }
    //console.log(typeof contributors);
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

      var arr = Object.keys(userObj).map(function (key) {return userObj[key]});
      console.log(arr);

    });
  }

  res.send(items);

};
