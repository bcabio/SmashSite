var http = require('http');
var async = require('async');
var lol = require('leagueapi');
var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient;

app.set('view engine', 'ejs');
app.use(express.static(__dirname));
const PORT = 5000;

lol.init('RGAPI-CBA2182D-D882-4F16-98B1-0E41A2D84518');


app.get("/", function(req, res){
  res.render('index');
});

app.get("/index", function(req, res){
  res.render('index');
});

app.get("/player", function(req, res){
  var name = req.query.userName;
  console.log(name);
  res.render('user',{'name':name});
});

/////////////////////////////////////////////
//Ignore all of the League of Legends stuff//
/////////////////////////////////////////////
app.get('/summoner', function(req, res){

   app.locals.pretty = true;

   res.setHeader('content-type', 'text/html');

   var recentGames, summonerInfo, summonerRankedStats, summonerRunes, summonerID;
   var epoch = Math.floor((new Date).getTime()/1000);

   var options = {};
   options.beginIndex = 1;
   options.endIndex = 10;

     lol.Summoner.getByName(req.query.userName, req.query.region, function(err, summoner){
         if(err)
         console.log(err);
       summonerInfo = summoner;
       console.log('summoner');
       summonerID = summonerInfo[req.query.userName]['id'];
       lol.getMatchHistory(summonerID, options, req.query.region, function(err, matchHistory){
         if(err)
           console.log(err);
        res.render('summoner.ejs');
       });
    });
});



var server = app.listen(PORT, function(){
  var host = server.address().address;
  var port = server.address().port;
  console.log('example app listening at http://%s:%s', host, port);
  console.log(server.address());
});
