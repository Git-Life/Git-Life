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
    console.log(req.body.difficulty);
  },
  inquire: function(req, res){}
}

//
