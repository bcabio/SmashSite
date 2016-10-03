var MongoClient = require('mongodb').MongoClient;
var Server = require('mongodb').Server;
var url = 'mongodb://sonicfangs:password@ds019053.mlab.com:19053/smash_data';
var matchList = {};

var eloCalc = function(){
MongoClient.connect(url,function(err, db){

  if(err)
    console.log(err);
  var col = db.collection("match_history");
    col.find({"week":{$exists:true}}).toArray(function(err, result){
        if(err)
          console.log(err);
          else{
            if(result != null){
              for(var i = 0; i < result.length; i++){
              if(matchList[result[i].week] == null)
                  matchList[result[i].week] = [];
                matchList[result[i].week].push(result[i]);
              }
              db.close();
              console.log(matchList);
            }
          }
      });
  });
}

var matchNew = function(matchJSON){
  var winnerTemp = matchJSON.winner_id;
  var loserTemp = matchJSON.loser_id;
  console.log(winnerTemp + ":" + loserTemp);
  MongoClient.connect(url, function(err, db){
    if(err)
      console.log(err);
    var col = db.collection('match_history');
    var player_info = db.collection('player_info');
    db.close();
  });
}

eloCalc();
matchNew({"winner_id":1, "loser_id":2});
