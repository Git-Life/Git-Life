var request = require('request');
var root = 'https://api.github.com/';
var secret = require('./tempsecret.js');
var fs = require('fs');

var secretURL = '&client_id=' + secret.id + '&client_secret=' + secret.secret;
var gitRequest = 'search/repositories?q=size:>1000&pushed=>2016-4-25&sort=stars&order=desc'

var lastTimeChecked;
var oneDayLength = 86400000;



module.exports = function(req, res){
  //check if we've done this today already
  if(lastTimeChecked === undefined || (Date.now() - lastTimeChecked) > oneDayLength){
    //get most starred repos updated today
    request({
      uri: root + gitRequest + secretURL,
      method: 'GET',
      headers: {'user-agent': 'node.js'}
    }, function (error, response, body) {
        if(error){
          console.log('Error: ', error);
        }
        var repoStorage = [];
        for(var i = 0; i < 10; i++){
          //find out which had most commits today
          (function(hold, cb){
            var currentRepo = JSON.parse(body).items[hold];
            var commitsURL = currentRepo.commits_url;
            commitsURL = commitsURL.slice(0, commitsURL.length - 6);
            repoStorage[hold] = {};
            repoStorage[hold].name = currentRepo.name;
            repoStorage[hold].url = currentRepo.url;
            repoStorage[hold].language = currentRepo.language;
            var compareDate = new Date();
            compareDate.setDate(compareDate.getDate() - 1);

              //grab the list of commits
            request({
              uri: commitsURL + '?since=' + compareDate.toISOString() + secretURL,
              method: 'GET',
              headers: {'user-agent': 'node.js'}
            }, function(error2, response2, body2){
                var commitArray = JSON.parse(body2)
                repoStorage[hold].commitsToday = commitArray.length;

                fs.writeFile(__dirname + '/../storage/repos.txt', JSON.stringify(repoStorage), (err) => {
                  if(err){
                    console.log(err);
                  }
                  console.log('file was saved');
                  lastTimeChecked = new Date();
                  if(hold === 9){
                    cb(repoStorage);
                  }
                });
              });
            })(i, afterTheIf);
          }
        });
  }


    fs.readFile(__dirname + '/../storage/repos.txt', (err, data) => {
      if(err){
        console.log(err);
      }
      afterTheIf(data);
    });

  function afterTheIf(sendMe){
    console.log('file sent');
    res.send(sendMe);
  }

  function gitHTTP(method, reqString, cb){
    request({
      uri: root + reqString + secretURL,
      method: method,
      headers: {'user-agent': 'node.js'}
    }, cb(error, response, body));
  }


};
