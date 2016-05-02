
module.exports = function(body, res){
  res.send(JSON.parse(body).items);
};
