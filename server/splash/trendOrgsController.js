var request = require('request');
var secret = require('./tempsecret.js');
var searchController = require('../search/SearchController.js');
// var fs = require('fs');

module.exports = {

  getRepresentedOrgs: function (req, res) {
    console.log('Inside getRepresentedOrgs');

    var orgs = [];
    var orgsObj = {};
    var root = 'https://api.github.com/';
    var gitRequest = 'search/repositories?q=size:>80&pushed=<2016-4-25&sort=stars&order=desc'; // &per_page=100
    var auth = '&client_id=' + secret.id + '&client_secret=' + secret.secret;
    var lastChecked;
    var oneDay = 86400000;

    var findOrgs = function (repos){
      for(var i = 0; i < repos.length; i++){
        if(repos[i].owner.type === "Organization"){
          if(orgsObj[repos[i].owner.login] === undefined){
            orgsObj[repos[i].owner.login] = {org: repos[i].owner.login, trendingRepo: repos[i].name, url: repos[i].owner.url, key: repos[i].owner.id, instances: 1};            
          } else {
            orgsObj[repos[i].owner.login].instances++;
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
        console.log('repos length: ', JSON.parse(body).items.length);
        findOrgs(JSON.parse(body).items);
        console.log('orgs: ', orgsObj);

        res.send(orgsObj);
      });
    };

      getRepos(req, res);
  }
};
