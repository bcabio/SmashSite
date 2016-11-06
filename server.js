/*globals util*/
// var MongoClient = require('mongodb').MongoClient;
// var Server = require('mongodb').Server;
var express = require('express');
var app = express();
// var url = 'mongodb://sonicfangs:password@ds019053.mlab.com:19053/smash_data';

app.set('view engine', 'ejs');
app.use(express.static(__dirname));
const PORT = 5000;

app.set('port', (process.env.PORT || 5000));

app.get("/", function(req, res){
  res.render('index.ejs');
});

app.get("/index", function(req, res){
  res.render('index.ejs');
});

app.listen(app.get('port'),function(){
  console.log("node app is running at localhost:" + app.get('port'));
});
// var server = app.listen(PORT, function(){
//   var host = server.address().address;
//   var port = server.address().port;
//   console.log('example app listening at http://%s:%s', host, port);
//   console.log(server.address());
// });
