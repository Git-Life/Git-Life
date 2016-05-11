var request = require('request');
var secret = require('./tempsecret.js');

module.exports = {

  getNewOrgs: function (req, res) {

    var today = new Date();
    var lastMonth = new Date(today.setUTCMonth(today.getUTCMonth() - 1));
    var lastMonthString = lastMonth.toISOString().slice(0,10);

    var newOrgs = [];
    var root = 'https://api.github.com/';
    var gitRequest = 'search/users?q=type:org+created:>' + lastMonthString + '&sort=repositories&order=desc'; // &per_page=100 // 2016-04-01
    var auth = '&client_id=' + secret.id + '&client_secret=' + secret.secret;

    var findOrgs = function (orgs){
      for(var i = 0; i < orgs.length; i++){
        newOrgs.push({
            login: orgs[i].login,
            avatar: orgs[i].avatar_url,
            html_url: orgs[i].html_url,
            id: orgs[i].id
        });
      }
    };

    var getOrgs = function (req, res) {
      request({
        uri: root + gitRequest + auth,
        method: 'GET',
        headers: {'user-agent': 'node.js'}
      }, function (error, response, body) {
        if(error){
          console.log('Error: ', error);
        }

        findOrgs(JSON.parse(body).items);

        res.send(newOrgs);
      });
    };

      getOrgs(req, res);
  }
};
