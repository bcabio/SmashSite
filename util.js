var MongoClient = require('mongodb').MongoClient;
var Server = require('mongodb').Server;
var url = 'mongodb://sonicfangs:password@ds019053.mlab.com:19053/smash_data';


//calculate all of the elos of all of the players
//and return an array of all elos, the index of
//a player's elo being the player's id
var eloCalc = function(){

  var matchList = {};
  var elos = [];
  var tempPlayerDoc;
  MongoClient.connect(url, function(err, db){
    if(err)
    console.log(err);
    var matchHistory = db.collection("match_history");
    var util = db.collection("util");
    var playerInfo = db.collection("player_info");
    util.find({"week_number":{$exists:true}}).toArray(function(err,weekNumber){
      if(weekNumber == null){
        console.log(err);
      }
      elos.push(0);
      playerInfo.find().forEach(function(t){
        elos.push(1200);
      });
      matchHistory.find().forEach(function(err, match){
        if(match == null){
          console.log(err);
        }
        else{
          // if you say you can't do it, you won't
          // for each matchHistory, add player stats and
          //  calc elo and change the elos for those two players
          // for each
            
            var winnerTemp = match.winner_id;
            var loserTemp = match.loser_id;
            console.log(winnerTemp + ":" + loserTemp);
            var eloWinner = 0, eloLoser = 0;
            playerInfo.find({"player_id":winnerTemp}).next(function(err, result){
              eloWinner = result.elo;
              console.log("L");
            });
            console.log(eloWinner);
            var expectedScoreWinner = 1/(1+Math.pow(10,(eloLoser - eloWinner)/400));
            var expectedScoreLoser=1/(1+Math.pow(10,(eloWinner-eloLoser)/400));
            console.log(expectedScoreWinner + ":" + expectedScoreLoser);
            //variables for determining the player's performance
            var fdk = match.winner_falls/match.winner_kos;
            var kdf = match.loser_kos/match.loser_falls;

            playerInfo.update({"player_id": winnerTemp},{$set:{"elo":eloWinner}});

          //
          // var matchJSON = result;
          // var winnerTemp = result.winner_id;
          // var loserTemp = result.loser_id;
          // var eloWinner = 0, eloLoser = 0;
          // playerInfo.find().toArray(function(err, player){
          //   console.log(player);
          // });
          //
          // playerInfo.find({"player_id":loserTemp}).toArray(function(err, player){
          //   eloLoser = player.elo;
          //   console.log(eloLoser);
          // });
          // console.log(eloWinner + ":" + eloLoser);
          // var expectedScoreWinner=1/(1+Math.pow(10,(elos[loserTemp]-elos[winnerTemp])/400));
          // var expectedScoreLoser=1/(1+Math.pow(10,(elos[winnerTemp]-elos[loserTemp])/400));
          // //variables for determining the player's performance
          // var fdk = matchJSON.winner_falls/matchJSON.winner_kos;
          // var kdf = matchJSON.loser_kos/matchJSON.loser_falls;
          // //calculate new player's elo
          // elos[winnerTemp] = Math.floor(elos[winnerTemp] + 32*(1-expectedScoreWinner)*(1.75-fdk));
          // elos[loserTemp] = Math.floor(elos[loserTemp] + 32*(0-expectedScoreLoser)*(1.75-kdf));

        }
      });


    // playerInfo.find().toArray(function(err, playerDoc){
    //     console.log(playerDoc);
    // });

    db.close();
  });
});
}

var playerReset = function(){
  MongoClient.connect(url, function(err, db){
    var playerInfo = db.collection('player_info');
    playerInfo.updateMany({"player_id":{$exists: true}},{$set:{"elo":1200,"career_kos":0,"career_falls":0,"career_wins":0,"career_losses":0}});
    playerInfo.find().toArray(function(err, playerDoc){
      // console.log(playerDoc);
      db.close();
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


playerReset();
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
