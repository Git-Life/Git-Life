var request = require('request');
var SECRET = {};
if(process.env.NODE_ENV === 'development'){
   SECRET = require('./tempsecret.js');
}
else if(process.env.NODE_ENV === 'production'){
   SECRET.id= process.env.GIT_ID;
   SECRET.secret= process.env.GIT_KEY;
}
module.exports = {

  getNewRepos: function (req, res) {

    var today = new Date();
    var lastWeek = new Date(today.setUTCHours(today.getUTCHours() - (8 * 24)));
    var lastWeekString = lastWeek.toISOString().slice(0,10);

    var newRepos = [];
    var root = 'https://api.github.com/';
    var gitRequest = 'search/repositories?q=created:>' + lastWeekString + '&sort=stars&order=desc'; // &per_page=100 // 2016-04-01
    var auth = '&client_id=' + secret.id + '&client_secret=' + secret.secret;

    var findRepos = function (repos){
      for(var i = 0; i < repos.length; i++){
        newRepos.push({
            name: repos[i].name,
            full_name: repos[i].full_name,
            description: repos[i].description,
            html_url: repos[i].html_url,
            homepage: repos[i].homepage,
            stargazers: repos[i].stargazers_count,
            watchers: repos[i].watchers_count,
            open_issues: repos[i].open_issues,
            language: repos[i].language,
            forks: repos[i].forks,
            size: repos[i].size,
            created_at: repos[i].created_at,
            updated_at: repos[i].updated_at,
            id: repos[i].id
        });
      }
    };

    var getRepos = function (req, res) {
      request({
        uri: root + gitRequest, // + auth
        method: 'GET',
        headers: {'user-agent': 'node.js'}
      }, function (error, response, body) {
        if(error){
          console.log('Error: ', error);
        }

        findRepos(JSON.parse(body).items);

        res.send(newRepos);
      });
    };

      getRepos(req, res);
  }
};
