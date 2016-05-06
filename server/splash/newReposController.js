var request = require('request');
var secret = require('./tempsecret.js');

module.exports = {

  getNewRepos: function (req, res) {

    var repos = {};
    var root = 'https://api.github.com/';
    var gitRequest = 'search/repositories?q=size:>80&created>2016-04-01&sort=stars&order=desc'; // &per_page=100
    var auth = '&client_id=' + secret.id + '&client_secret=' + secret.secret;

    var today = new Date();
    console.log('today: ', today.toLocaleDateString());

    //var lastMonth = new Date(today.setUTCMonth(today.getUTCMonth() - 1));
    //console.log('today minus one month: ', lastMonth.toLocaleDateString());


    var lastWeek = new Date(today.setUTCHours(today.getUTCHours() - (8 * 24)));
    console.log('today minus one week: ', lastWeek.toLocaleDateString());

    // var findOrgs = function (repos){
    //   for(var i = 0; i < repos.length; i++){
    //     if(repos[i].owner.type === "Organization"){
    //       if(orgs[repos[i].owner.login] === undefined){

    //         orgs[repos[i].owner.login] = {org: repos[i].owner.login, trendingRepo: repos[i].name, url: repos[i].owner.html_url, avatar: repos[i].owner.avatar_url, key: repos[i].owner.id, instances: 1};
    //       } else {
    //         orgs[repos[i].owner.login].instances++;
    //       }
    //     }
    //   }
    // };

    var getRepos = function (req, res) {
      request({
        uri: root + gitRequest, // + auth
        method: 'GET',
        headers: {'user-agent': 'node.js'}
      }, function (error, response, body) {
        if(error){
          console.log('Error: ', error);
        }
        console.log(JSON.parse(body).items);
        findOrgs(JSON.parse(body).items);

        res.send(orgs);
      });
    };

      getRepos(req, res);
  }
};
