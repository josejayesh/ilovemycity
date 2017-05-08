var express = require('express');
var path = require('path');
var app = express();
var index = require('./router/home');
var city = require('./router/city');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.get('/', index.home);
app.get('/:city',city.city);
app.use('/public', express.static('public'))
var port = process.env.PORT || 8080;
var server = app.listen(port, function(req, res){
  console.log("listening to :"+port);
});
