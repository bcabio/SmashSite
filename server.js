var express = require('express');
var app = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname));
const PORT = 5000;

app.get("/", function(req, res){
  res.render('index');
});

app.get("/index", function(req, res){
  res.render('index');
});

/////////////////////////////////////////////
//Ignore all of the League of Legends stuff//
/////////////////////////////////////////////

var server = app.listen(PORT, function(){
  var host = server.address().address;
  var port = server.address().port;
  console.log('example app listening at http://%s:%s', host, port);
  console.log(server.address());
});
