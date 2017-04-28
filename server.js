/*globals util*/
var MongoClient = require('mongodb').MongoClient;
var Server = require('mongodb').Server;
var express = require('express');
var app = express();
var url = 'mongodb://sonicfangs:password@ds019053.mlab.com:19053/smash_data';

app.use(express.static(__dirname));
const PORT = 5000;

app.set('port', (process.env.PORT || 5000));

app.get('/players', function(req, res){
  MongoClient.connect(url, function(err, db){
    var playerInfo = db.collection('player_info');
    playerInfo.find({}).toArray(function(err, data){
      res.sendFile('index.html'); 
    });
  });
});

app.get('/index', function(req, res){
  res.render('index');
});

app.listen(app.get('port'),function(){
  console.log('node app is running at localhost:' + app.get('port'));
});

var swap = function(items, firstIndex, secondIndex){
  var temp = items[firstIndex];
  items[firstIndex] = items[secondIndex];
  items[secondIndex] = temp;
}
