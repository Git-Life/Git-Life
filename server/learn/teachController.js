if(process.env.NODE_ENV==='production'){
  var keyContents = process.env.GCLOUD_JSON;

  var config = {
    projectId: 'gitalytics-1288',
    credentials: JSON.parse(keyContents)
  }
}
else if(process.env.NODE_ENV==='development'){
  var config = {
    keyFilename: __dirname + '/../../gitalytics-5f17b3312e53.json',
    projectId: 'gitalytics-1288'
  }
}

var gcloud = require('gcloud')(config);
var prediction = gcloud.prediction();
// var gcs = gcloud.storage();
// var bucket = gcs.bucket('gitalytics_secure');
// var modelDataCsv = bucket.file('train.csv');
// prediction.createModel('gitFinal', {
//     data: modelDataCsv
//   }, function(err, model, apiResponse){
//     if(err){
//       console.log("error in prediction", err);
//     }
//   });
var model = prediction.model('gitFinal');
model.exists(function(err, exists){
  if(err){
    console.log('exists err', err);
  }
  console.log('Does our model exist?  ', exists);
})

module.exports = {
  instruct: function(req, res){
    var issue = req.body.issue;
    var trainArray = [];
    trainArray.push(issue.title, issue.body, issue.comments);
    model.train(req.body.difficulty, trainArray, function(err, apiRes){
      if(err){
        console.log('model train had err: ', err);
      }
      res.status(200).send();
    });
  },
  inquire: function(req, res){
    var arr = Object.keys(req.query).map(function (key) {return req.query[key]});
    model.query(arr, function(err, result){
      if(err){
        console.log('err in inquire', err);
      }
      res.send(result.winner);
    });
  }
}
