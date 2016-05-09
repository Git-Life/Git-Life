var request = require('request');
var secret = require('./tempsecret.js');

module.exports = {

  getNewOrgs: function (req, res) {

    var today = new Date();
    console.log('today: ', today.toLocaleDateString());

    //var lastMonth = new Date(today.setUTCMonth(today.getUTCMonth() - 1));
    //console.log('today minus one month: ', lastMonth.toLocaleDateString());

    var lastWeek = new Date(today.setUTCHours(today.getUTCHours() - (8 * 24)));
    //console.log('today minus one week: ', lastWeek.toLocaleDateString()); // 3/29/2016
    console.log('today minus one week: ', lastWeek.toISOString().slice(0,10));
    var lastWeekString = lastWeek.toISOString().slice(0,10);

    var newOrgs = [];
    var root = 'https://api.github.com/';
    var gitRequest = 'search/users?q=type=org&created:>' + lastWeekString + '&sort=followers&order=desc'; // &per_page=100 // 2016-04-01
    var auth = '&client_id=' + secret.id + '&client_secret=' + secret.secret;

    var findOrgs = function (orgs){
      for(var i = 0; i < orgs.length; i++){
        newOrgs.push({
            login: repos[i].login,
            avatar: repos[i].avatar_url,
            // description: repos[i].description,
            html_url: repos[i].html_url,
            // homepage: repos[i].homepage,
            // stargazers: repos[i].stargazers_count,
            // watchers: repos[i].watchers_count,
            // open_issues: repos[i].open_issues,
            // language: repos[i].language,
            // forks: repos[i].forks,
            // size: repos[i].size,
            // created_at: repos[i].created_at,
            // updated_at: repos[i].updated_at,
            id: repos[i].id
        });
      }
    };

    var getOrgs = function (req, res) {
      request({
        uri: root + gitRequest+ auth,
        method: 'GET',
        headers: {'user-agent': 'node.js'}
      }, function (error, response, body) {
        if(error){
          console.log('Error: ', error);
        }
        console.log('hey: ', JSON.parse(body).items);
        //findOrgs(JSON.parse(body).items);
        findOrgs(JSON.parse(body).items);

        res.send(newOrgs);
      });
    };

      getOrgs(req, res);
  }
};
