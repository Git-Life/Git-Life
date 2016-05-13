var request = require('request');
var async   = require('async');
var secret = {};
if(process.env.NODE_ENV === 'development'){
  secret = require('../splash/tempsecret.js');
}
else if(process.env.NODE_ENV === 'production'){
  secret.id= process.env.GIT_ID;
  secret.secret= process.env.GIT_KEY;
}

module.exports = {
  getOrgs: function (resObj, res) {

    var uniqueOrgs = {};
    resObj['organizations'] = [];

    resObj.items.forEach(function(element, index){
      //console.log(element.owner.login);
      // need to check if unique first, then push to array (needed for client sort methods)
      if(element.owner.type === 'Organization' && !uniqueOrgs[element.owner.login]){
        uniqueOrgs[element.owner.login] = element.owner.login;
        resObj['organizations'].push({
          name: element.owner.login,
          avatar_url: element.owner.avatar_url,
          url: element.owner.html_url,
          id: element.owner.id
        });
      }
    });

    //console.log('organizations: ', resObj.organizations);
    res.send(resObj);
    for (var member in resObj) delete resObj[member];
  }
};
