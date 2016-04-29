var request = require('request');
var fs = require('fs');

const SECRET = require('../../config.js');
const GITHUB_ROOT = 'https://api.github.com/';

const SECRET_URL  = '&client_id=' + SECRET.clientID + '&client_secret=' + SECRET.clientSecret;

var   timeOfLastGitRequest;
const ONE_DAY_SECONDS = 86400000;

module.exports = function(req, res){
  // return early if we've already made an API request today
  if ( (timeOfLastGitRequest !== undefined) ||
       (!((Date.now() - timeOfLastGitRequest) > ONE_DAY_SECONDS))) {
    return;
  }

  // Query API

    var gitRequest = 'search/repositories?q=size:>1000&pushed=>2016-4-25&sort=stars&order=desc'

    request({
      uri:    GITHUB_ROOT + gitRequest + SECRET_URL,
      method: 'GET',
      headers: {'user-agent': 'node.js'}

      }, function (error, response, body) {
          if(error){
            console.log('Error: ', error);
          }

          fs.writeFile(__dirname + '/../dummyData_SH_temp/commits.txt', body, (err) => {
            if(err){
              console.log(err);
            }

          console.log('file was saved');
          lastTimeChecked = new Date();
        });
      });
  }

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

