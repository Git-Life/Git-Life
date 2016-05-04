var config = {
  keyFilename: '../../gitalytics-5f17b3312e53.json',
  projectId: 'gitalytics-1288'
}
var gcloud = require('gcloud')(config);
var prediction = gcloud.prediction();
prediction.createModel('gitTest', function(err, model, apiResponse){
  if(err){
    console.log("error in prediction", err);
  }
});

module.exports = function(req, res){
  res.send('ok');

  };

//
