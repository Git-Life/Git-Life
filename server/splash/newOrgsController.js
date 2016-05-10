var request = require('request');
var secret = require('./tempsecret.js');

module.exports = {

  getNewOrgs: function (req, res) {

    var today = new Date();
    //console.log('today: ', today.toLocaleDateString());

    var lastMonth = new Date(today.setUTCMonth(today.getUTCMonth() - 1));
    //console.log('today minus one month: ', lastMonth.toLocaleDateString());
    var lastMonthString = lastMonth.toISOString().slice(0,10);

    //var lastWeek = new Date(today.setUTCHours(today.getUTCHours() - (8 * 24)));
    //console.log('today minus one week: ', lastWeek.toISOString().slice(0,10));
    //var lastWeekString = lastWeek.toISOString().slice(0,10);

    var newOrgs = [];
    var root = 'https://api.github.com/'; //NOT SHOWING ORGS, but regular USERS
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
        //console.log('hey: ', JSON.parse(body).items);
        findOrgs(JSON.parse(body).items);
        console.log('newOrgs: ', newOrgs);
        res.send(newOrgs);
      });
    };

      getOrgs(req, res);
  }
};
