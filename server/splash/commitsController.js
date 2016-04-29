var request = require('request');
var fs = require('fs');

const SECRET = require('../../config.js');
const GITHUB_ROOT = 'https://api.github.com/';

const SECRET_URL  = '&client_id=' + SECRET.clientID + '&client_secret=' + SECRET.clientSecret;
console.log('in the commitsController file..');

var   timeOfLastGitRequest = null;
const ONE_DAY_SECONDS = 86400000;
const DEV_TIMEOUT = 1000; // milisec

module.exports = function(req, res){

  // return early if we've already made an API request today
  // console.log('in commitsController');
  // if ( (timeOfLastGitRequest !== null) &&
  //      (((Date.now() - timeOfLastGitRequest) < DEV_TIMEOUT))) {
  //   console.log('early return from  commitsController.js');
  //   res.send(JSON.parse({}));

  //   return;
  // }

  // Query API

    // var gitRequest = 'size:>1000&pushed=>2016-4-25&sort=stars&order=desc'
    // //var query = req.query.searchTerm;
    // var query = 'search/repositories?q=react-redux';

    // works using Alex's query string
    var query = 'search/repositories?q=react';
    console.log('about to create request (comitsController.js)');


    request({
      // uri:    GITHUB_ROOT + gitRequest + query + SECRET_URL,
      // right now just use the public API - above is my key, which got rate limited
      uri:    GITHUB_ROOT + query,
      method: 'GET',
      headers: {'user-agent': 'node.js'}
      }, function (error, response, body) {
        console.log('in function body (comitsController.js)');

          if(error){
            console.log('Error: ', error);
          }

          fs.writeFile(__dirname + '/../dummyData_SH_temp/commits.txt', body, (err) => {
            if(err){
              console.log('fs.writeFile error in server/splash/commitsController.js', err);
            }

          console.log('fs: "/../dummyData_SH_temp/commits.txt" was saved with shQuery Results');
          timeOfLastGitRequest = new Date();
          console.log(timeOfLastGitRequest);
        });

        console.log('res.send() executed, (server/splash/commitsController.js)');
        res.send(JSON.parse(body).items);

      });
  }

/**** sample from search bar github api query ***

   getRepos: function (req, res) {
    var query = req.query.searchTerm;
    request({
      uri: root + 'search/repositories?q=' + query,
      method: 'GET',
      headers: {'user-agent': 'node.js'}
    }, function (error, response, body) {
      if(error){
        console.log('Error: ', error);
      }
      res.send(JSON.parse(body).items);
    });
  },

*/



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

