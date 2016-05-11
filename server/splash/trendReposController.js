var request = require('request');
var root = 'https://api.github.com/';
var fs = require('fs');
var secret = {};
if(process.env.NODE_ENV === 'development'){
  secret = require('./tempsecret.js');
}
else if(process.env.NODE_ENV === 'production'){
  secret.id= process.env.GIT_ID;
  secret.secret= process.env.GIT_KEY;
}

var secretURL = '&client_id=' + secret.id + '&client_secret=' + secret.secret;
var gitRequest = 'search/repositories?q=size:>1000&pushed=>2016-4-25&sort=stars&order=desc'

var lastTimeChecked;
var oneDayLength = 86400000;

function gitHTTP(method, reqString, cb){
  request({
    uri: reqString + secretURL,
    method: method,
    headers: {'user-agent': 'node.js'}
  }, cb);
}

module.exports = function(req, res){
  //check if we've done this today already
  if(lastTimeChecked === undefined || (Date.now() - lastTimeChecked) > oneDayLength){
    //get most starred repos updated today
    gitHTTP('GET', root + gitRequest, function (error, response, body) {
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
            repoStorage[hold].description = currentRepo.description;
            repoStorage[hold].html_url = currentRepo.html_url;
            repoStorage[hold].stargazers = currentRepo.stargazers_count;
            repoStorage[hold].open_issues = currentRepo.open_issues;
            repoStorage[hold].language = currentRepo.language;
            repoStorage[hold].full_name = currentRepo.full_name;
            repoStorage[hold].html_url = currentRepo.html_url;
            repoStorage[hold].description = currentRepo.description;
            if(currentRepo.homepage){
              repoStorage[hold].homepage = currentRepo.homepage;
            }
            repoStorage[hold].stargazers_count = currentRepo.stargazers_count;
            repoStorage[hold].watchers_count = currentRepo.watchers_count;
            repoStorage[hold].created_at = currentRepo.created_at;
            repoStorage[hold].updated_at = currentRepo.updated_at;
            repoStorage[hold].open_issues = currentRepo.open_issues;
            repoStorage[hold].forks = currentRepo.forks;
            repoStorage[hold].size = currentRepo.size;

            var compareDate = new Date();
            compareDate.setDate(compareDate.getDate() - 1);

            //grab the list of commits
            var commitRequest = commitsURL + '?since=' + compareDate.toISOString();
            gitHTTP('GET', commitRequest,
            function(error2, response2, body2){
              var commitArray = JSON.parse(body2)
              repoStorage[hold].commitsToday = commitArray.length;

              fs.writeFile(__dirname + '/../storage/repos.txt', JSON.stringify(repoStorage), (err) => {
                if(err){
                  console.log(err);
                }
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

  else{
    fs.readFile(__dirname + '/../storage/repos.txt', (err, data) => {
      if(err){
        console.log(err);
      }
      afterTheIf(data);
    });
  }

  function afterTheIf(sendMe){
    res.send(sendMe);
  }
};
