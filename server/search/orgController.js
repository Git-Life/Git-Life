var secret  = require('../splash/tempsecret');
var request = require('request');
var async   = require('async');

module.exports = {
  getOrgs: function (resObj, res) {

    resObj['organizations'] = [];

    resObj.items.forEach(function(element, index){
      if(element.owner.type === 'Organization'){
        resObj['organizations'].push({
          name: element.owner.login,
          avatar_url: element.owner.avatar_url,
          url: element.owner.html_url,
          id: element.owner.id
        });
      }
    });

    console.log('organizations: ', resObj.contributors);
    res.send(resObj);
  }
};