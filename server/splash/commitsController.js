var request = require('request');
var fs = require('fs');

const SECRET = require('./tempsecret.js');
const SECRET_URL  = '&client_id=' + SECRET.id + '&client_secret=' + SECRET.secret;

const GITHUB_ROOT = 'https://api.github.com/';


module.exports = function(req, res){

    var oneDay = 86400000;
    var yesterday = Date.now() - oneDay;
    var yesterdayStr = yesterday.getFullYear + '-'+ yesterday.getDate + '-' + yesterday.getDay;

    var endpoint = 'search/issues?q=';
    var keyword = 'react in:body';
    var since = 'updated:<=' + yesterdayStr; //+ today.toISOString();
    var params = keyword + since;

      // temp use the public API instead of this one..
      // uri:     GITHUB_ROOT + endpoint + params, // + SECRET_URL,
    request(
      {
        uri:     GITHUB_ROOT + endpoint + params,
        method:  'GET',

        headers: {'user-agent': 'node.js'}
      },
      function (error, response, body) {
        if(error){
          console.log('error in server/splash/commitsController.js: ', error);
        }

        // code from saveResultsToFile goes here

        res.send(JSON.parse(body).items);
      }
    );


    function saveResultsToFile(){
      fs.writeFile(__dirname + '../storage/commitsDataTemp.txt', JSON.stringify(body), (err) => {
        if(err){
          console.log('fs.writeFile error in server/splash/commitsController.js', err);
        }
      });
    }

  }
