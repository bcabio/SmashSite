var MongoClient = require('mongodb').MongoClient;
var Server = require('mongodb').Server;
var url = 'mongodb://sonicfangs:password@ds019053.mlab.com:19053/smash_data';


//calculate all of the elos of all of the players
//and return an array of all elos, the index of
//a player's elo being the player's id
var eloCalc = function(){

  var matchList = {};

  MongoClient.connect(url, function(err, db){
    if(err)
    console.log(err);
    var col = db.collection("match_history");
    var util = db.collection("util");
    var player_info = db.collection("player_info");
    util.find({"week_number":{$exists:true}}).toArray(function(err,weekNumber){
      if(weekNumber == null)
      console.log(err);
      col.find({"week":{$exists:true}}).toArray(function(err, result){
        if(result == null)
        console.log(err);
        else{
          player_info.find().toArray(function(err,playerDoc){
            if(playerDoc == null)
            console.log(err);
            else{
              console.log(playerDoc);
              var elos = [];
              elos.push(0);
              for(var i = 1; i < playerDoc.length; i++){
                elos.push(playerDoc[i].elo);
              }
              console.log(elos);
              for(var i = 0; i < result.length; i++){

                var matchJSON = result[i];
                console.log(result[i].winner_id + ":" + result[i].loser_id);
                console.log(result[i]);
                console.log(elos);
                var winnerTemp = result[i].winner_id;
                var loserTemp = result[i].loser_id;
                var expectedScoreWinner=1/(1+Math.pow(10,(elos[loserTemp]-elos[winnerTemp])/400));
                var expectedScoreLoser=1/(1+Math.pow(10,(elos[winnerTemp]-elos[loserTemp])/400));
                //variables for determining the player's performance
                var fdk = matchJSON.winner_falls/matchJSON.winner_kos;
                var kdf = matchJSON.loser_kos/matchJSON.loser_falls;
                //calculate new player's elo
                elos[winnerTemp] = Math.floor(elos[winnerTemp] + 32*(1-expectedScoreWinner)*(1.75-fdk));
                elos[loserTemp] = Math.floor(elos[loserTemp] + 32*(0-expectedScoreLoser)*(1.75-kdf));
              }
              //console.log(matchList);

              console.log(elos);
              db.close();
              var test = {
                test:[]
              };
              test.test = elos;

              console.log(test);
              // console.log(matchList);
            }
          });
        }
      });
    });
  });
}
// //
// var matchNew = function(matchJSON){
//   var winnerTemp = matchJSON.winner_id;
//   var loserTemp = matchJSON.loser_id;
//   console.log(winnerTemp + ":" + loserTemp);
//   MongoClient.connect(url, function(err, db){
//     if(err)
//     console.log(err);
//     var col = db.collection('match_history');
//     var player_info = db.collection('player_info');
//     var elos = [];
//     elos.push(0); //placeholder
//     // elos.push(1203);
//     player_info.find().toArray(function(err,playerDoc){
//       if(err)
//       console.log(err);
//       else {
//         console.log(playerDoc);
//         for(var i = 0; i < playerDoc.length; i++){
//           elos.push(playerDoc[i].elo);
//         }
//         var expectedScoreWinner=1/(1+Math.pow(10,(playerDoc[loserTemp].elo-playerDoc[winnerTemp].elo)/400));
//         var expectedScoreLoser=1/(1+Math.pow(10,(playerDoc[winnerTemp].elo-playerDoc[loserTemp].elo)/400));
//         var fdk = matchJSON.winner_falls/matchJSON.winner_kos;
//         var kdf = matchJSON.loser_kos/matchJSON.loser_falls;
//
//         var winnerNewElo = Math.floor(playerDoc[winnerTemp].elo + 32*(1-expectedScoreWinner)*(1.75-fdk));
//         var loserNewElo = Math.floor(playerDoc[loserTemp].elo + 32*(1-expectedScoreLoser)*(1.75-kdf));
//
//         elos[winnerTemp] = winnerNewElo;
//         elos[loserTemp] = loserNewElo;
//
//         console.log(elos);
//
//         // col.find().toArray(function(err, result){
//         //   if(err)
//         //     console.log(err);
//         //   else{
//         //     for(var j = 0; j < result.length; j++){
//         //       var winner
//         //     }
//         //   }
//         // });
//
//        }
//      });
//
//      db.close();
//    });
//  }

eloCalc();
// matchNew({
//   "week": 4,
//   "winner_id":4,
//   "winner_char":'lucario',
//   "winner_kos":4,
//   "winner_falls":3,
//   "loser_id":1,
//   "loser_char":'mr_game_&_watch',
//   "loser_kos":3,
//   "loser_falls":4,
//   "map":'Pokemon Stadium'});
