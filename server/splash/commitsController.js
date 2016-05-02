var request = require('request');
var fs = require('fs');

const SECRET = require('./tempsecret.js');
const GITHUB_ROOT = 'https://api.github.com/';

const SECRET_URL  = '&client_id=' + SECRET.id + '&client_secret=' + SECRET.secret;



module.exports = function(req, res){

    var endpoint = 'search/issues?q=';
    var params = 'react in:body updated:>=2013-02-01';

    request({
      uri: GITHUB_ROOT + endpoint + params,
      method: 'GET',
      headers: {'user-agent': 'node.js'}
      }, function (error, response, body) {
          if(error){
            console.log('Error: ', error);
          }

          fs.writeFile(__dirname + '/../storage/commits.txt', JSON.stringify(body), (err) => {
            if(err){
              console.log('fs.writeFile error in server/splash/commitsController.js', err);
            }
          timeOfLastGitRequest = new Date();
        });
        res.send(JSON.parse(body).items);
      });
  }
