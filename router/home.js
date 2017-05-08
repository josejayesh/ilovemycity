exports.home=function(req,res){
  var data = require('../home.json');
  res.render('home', {
    'data' : data,
  });
}
