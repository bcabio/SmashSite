var MongoClient = require('mongodb').MongoClient;
var Server = require('mongodb').Server;
var url = 'mongodb://localhost:27017/match_history';
var url2 = 'mongodb://localhost:27017/player_info';

var eloCalc = function(){
MongoClient.connect(url,function(err, db){
  MongoClient.connect(url2,function(err, db2){

  if(err)
    console.log(err);
  var col = db.collection("match_history");
  var playerstuff = db2.collection("player_info");
  for(var j = 1; j <= 4; j++){
    console.log(j);
    col.find({"week":j}).each(function(err, result){
        if(err)
          console.log(err);
          else{
            if(result != null){
              //console.log(result);
              //console.log(result);
              var winnerTemp = result.winner_id;
              //console.log(result['winner_id']);
              var loserTemp = result.loser_id;
              //console.log(loserTemp);
              playerstuff.find({$or:[{'player_id':winnerTemp},{'player_id':loserTemp}]}).next(function(err, result){
              console.log(result);
              console.log("Week:" + j);
              console.log("-----");

              });
              col.find({"week":1}).each(function(err, result){
                console.log(result);
              });
              db.close();
              db2.close();
            }
          }
      });
    }
  });
  });
}

eloCalc();
