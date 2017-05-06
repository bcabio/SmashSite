/*globals util*/
var MongoClient = require('mongodb').MongoClient;
var Server = require('mongodb').Server;
var express = require('express');
var app = express();
require('dotenv').config();
var url = process.env.DB_URL;

var util = require('./util.js');

app.use(express.static(__dirname));

app.set('port', (process.env.PORT));

app.get('/index', function(req, res){
  res.render('index');
});

app.get('/recalc', function(req,res){
  util.playerStatRecalc();
  res.send('ok');
});

app.get('/players', function(req, res){
  var playerRankBool = (req.query.ranked == "true" ? true: false);
  MongoClient.connect(url, function(err, db){
    var playerInfo = db.collection('player_info');
    playerInfo.find({ranked:playerRankBool})
                .sort({elo:-1})
                .toArray( function(err, data){
        if (err){
          console.log(err);
          res(err);
        } else { 
          // console.log(data);
          res.json(data);
        }
      });
  });

});

app.listen(app.get('port'),function(){
  console.log('node app is running at localhost:' + app.get('port'));
});

var swap = function(items, firstIndex, secondIndex){
  var temp = items[firstIndex];
  items[firstIndex] = items[secondIndex];
  items[secondIndex] = temp;
}
