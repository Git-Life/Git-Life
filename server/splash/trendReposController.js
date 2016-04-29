

var request = require('request');
var root = 'https://api.github.com/';
var secret = require('./tempsecret.js');
var fs = require('fs');

var secretURL = '&client_id=' + secret.id + '&client_secret=' + secret.secret;
var gitRequest = 'search/repositories?q=size:>1000&pushed=>2016-4-25&sort=stars&order=desc'

var lastTimeChecked;
var oneDayLength = 86400000;

module.exports = function(req, res){
  //logic goes here
  //check if we've done this today already
  if(lastTimeChecked === undefined || (Date.now() - lastTimeChecked) > oneDayLength){
    //first just issue a general get repos request sorted and etc.
    request({
      uri: root + gitRequest + secretURL,
      method: 'GET',
      headers: {'user-agent': 'node.js'}
    }, function (error, response, body) {
      if(error){
        console.log('Error: ', error);
      }
      // fs.writeFile(__dirname + '/../storage/repos.txt', body, (err) => {
      //   if(err){
      //     console.log(err);
      //   }
      //   console.log('file was saved');
      //   lastTimeChecked = new Date();
      // });
      var repoStorage = {};
      for(var i = 0; i < 10; i++){
        //find out which had most commits today
        (function(hold){
          var currentRepo = JSON.parse(body).items[i];
          var commitsURL = currentRepo.commits_url;
          commitsURL = commitsURL.slice(0, commitsURL.length - 6);
          repoStorage[currentRepo.name] = {};
          repoStorage[currentRepo.name].name = currentRepo.name;
          repoStorage[currentRepo.name].url = currentRepo.url;
          repoStorage[currentRepo.name].language = currentRepo.language;
          //repoStorage[currentRepo.name].commitsToday = 0;
          var compareDate = new Date();
          compareDate.setDate(compareDate.getDate() - 1);
            //grab the list of commits
            request({
              uri: commitsURL + '?since=' + compareDate.toISOString() + secretURL,
              method: 'GET',
              headers: {'user-agent': 'node.js'}
            }, function(error2, response2, body2){
                //commit compare logic
                console.log(commitsURL + '?since=' + compareDate.toISOString() + secretURL);
                var commitArray = JSON.parse(body2)
                console.log('length of ', currentRepo.name, 'is ', commitArray.length)
                repoStorage[currentRepo.name].commitsToday = commitArray.length;
              });
          })(i);

        }
          console.log(repoStorage);
        });
  }
};

    // console.log('this is body', JSON.parse(body).items);
    //for top 10 results
    // for(var i = 0; i < 2; i++){
    //   //find out which had most commits today
    //   var commitsURL = JSON.parse(body).items[i].commits_url;
    //   commitsURL = commitsURL.slice(0, commitsURL.length - 6);
    //   //
    //   // request({
    //   //   uri: commitsURL,
    //   //   method: 'GET',
    //   //   headers: {'user-agent': 'node.js'}
    //   // }, function(error2, response2, body2){
    //   //   console.log(JSON.parse(body2));
    //   // });
    // }

    //do something to body.items[i].commits_url
      //and then check if each.commit.author.date is today
        //increase counter by 1 if so
        //attach this counter to some new array
        //sort the end result by this counter
