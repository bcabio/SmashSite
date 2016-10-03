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
    col.find({"week":{$exists:true}}).toArray(function(err, result){
        if(err)
          console.log(err);
          else{
            if(result != null){
              var matchList = {
              };
              for(var i = 0; i < result.length; i++){
              if(matchList[result[i].week] == null)
                  matchList[result[i].week] = [];
                matchList[result[i].week].push(result[i]);
              }
              db.close();
              db2.close();
              console.log(matchList);
            }
          }
      });
  });
  });
}

eloCalc();
