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
    console.log('this is body', JSON.parse(body));
    //for top 10 results
    for(var i = 0; i < 10; i++){
      //find out which had most commits today
      request({
        uri: body.items[i].commits_url,
        method: 'GET',
        headers: {'user-agent': 'node.js'}
      }, function(error2, response2, body2){
        
      });
    }

    //do something to body.items[i].commits_url
      //and then check if each.commit.author.date is today
        //increase counter by 1 if so
        //attach this counter to some new array
        //sort the end result by this counter
  });

};
