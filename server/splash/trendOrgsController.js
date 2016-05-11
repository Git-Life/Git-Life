var request = require('request');
var searchController = require('../search/SearchController.js');
var secret = {};
if(process.env.NODE_ENV === 'development'){
  secret = require('./tempsecret.js');
}
else if(process.env.NODE_ENV === 'production'){
  secret.id= process.env.GIT_ID;
  secret.secret= process.env.GIT_KEY;
}

module.exports = {

  getRepresentedOrgs: function (req, res) {

    var orgs = {};
    var root = 'https://api.github.com/';
    var gitRequest = 'search/repositories?q=size:>80&pushed=<2016-4-25&sort=stars&order=desc'; // &per_page=100
    var auth = '&client_id=' + secret.id + '&client_secret=' + secret.secret;

    var findOrgs = function (repos){
      for(var i = 0; i < repos.length; i++){
        if(repos[i].owner.type === "Organization"){
          if(orgs[repos[i].owner.login] === undefined){

            orgs[repos[i].owner.login] = {org: repos[i].owner.login, trendingRepo: repos[i].name, url: repos[i].owner.html_url, avatar: repos[i].owner.avatar_url, key: repos[i].owner.id, instances: 1};
          } else {
            orgs[repos[i].owner.login].instances++;
          }
        }
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
        //console.log(JSON.parse(body).items);
        findOrgs(JSON.parse(body).items);

        res.send(orgs);
      });
    };

      getRepos(req, res);
  }
};
