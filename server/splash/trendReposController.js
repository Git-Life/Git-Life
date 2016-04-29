var request = require('request');
var root = 'https://api.github.com/';


module.exports = function(req, res){
  //logic goes here
  //first just issue a general get repos request sorted and etc.
  var req = 'search/repositories?q=size:>1000&pushed=>2016-4-25&sort=stars&order=desc'
  request({
    uri: root + req,
    method: 'GET',
    headers: {'user-agent': 'node.js'}
  }, function (error, response, body) {
    if(error){
      console.log('Error: ', error);
    }
    console.log('this is response:', response);
    console.log('this is body', body);
  });

};
