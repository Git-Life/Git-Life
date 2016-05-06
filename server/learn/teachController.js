var config = {
  keyFilename: '../../gitalytics-5f17b3312e53.json',
  projectId: 'gitalytics-1288'
}
var gcloud = require('gcloud')(config);
var prediction = gcloud.prediction();
//this model has been created via below, not sure if we need
//to do it again ever. /
// prediction.createModel('gitTest', function(err, model, apiResponse){
//   if(err){
//     console.log("error in prediction", err);
//   }
// });
var model = prediction.model('gitTest');
model.exists(function(err, exists){
  if(err){
    console.log('exists err', err);
  }
  console.log('exists is ', exists);
})

module.exports = {
  instruct: function(req, res){
    var issue = req.body.issue;
    console.log(req.body.difficulty);
    var trainArray = [];
    trainArray.push(issue.title, issue.body, issue.comments);
    model.train('req.body.difficulty', trainArray, function(err, apiRes){
      if(err){
        console.log('model train had err: ', err);
      }
      res.status(200).send();
    });

  },
  inquire: function(req, res){
    var arr = Object.keys(req.query).map(function (key) {return req.query[key]});
    console.log(arr);
  }
}

//
