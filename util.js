var MongoClient = require('mongodb').MongoClient;
var Server = require('mongodb').Server;
var url = process.env.DB_URL;


//calculate all of the elos of all of the players
//and return an array of all elos, the index of
//a player's elo being the player's id
var eloCalc = function(){

  var matchList = {};
  var playerThing = [];
  var elos = [], careerWins = [], careerLosses = [], careerKOS = [], careerFalls = [];
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
      careerWins.push(0);
      careerLosses.push(0);
      careerKOS.push(0);
      careerFalls.push(0);

      playerInfo.find().forEach(function(t){
        careerWins.push(0);
        careerLosses.push(0);
        careerKOS.push(0);
        careerFalls.push(0);
        elos.push(1200);
      });

      matchHistory.find().toArray(function(err, result){
        if(result == null){
          console.log(err);
        }
        else{
          result.forEach(function(match){
            var matchJSON = match;
            var winnerTemp = matchJSON.winner_id;
            var loserTemp = matchJSON.loser_id;
            var eloWinner = elos[winnerTemp], eloLoser = elos[loserTemp];

            var expectedScoreWinner=1/(1+Math.pow(10,(elos[loserTemp]-elos[winnerTemp])/400));
            var expectedScoreLoser=1/(1+Math.pow(10,(elos[winnerTemp]-elos[loserTemp])/400));

            var falls_over_kos = matchJSON.winner_falls/matchJSON.winner_kos;
            var kos_over_falls = matchJSON.loser_kos/matchJSON.loser_falls;

            careerWins[winnerTemp] += 1;
            careerLosses[loserTemp] += 1;

            careerKOS[winnerTemp] += matchJSON.winner_kos;
            careerFalls[winnerTemp] += matchJSON.winner_falls;

            careerKOS[loserTemp] += matchJSON.loser_kos;
            careerFalls[loserTemp] += matchJSON.loser_falls;

            elos[winnerTemp] = Math.floor(elos[winnerTemp] + 32*(1-expectedScoreWinner)*(1.75-falls_over_kos));
            elos[loserTemp] = Math.floor(elos[loserTemp] + 32*(0-expectedScoreLoser)*(1.75-kos_over_falls));
          });
        }

        // for(var w = 0; w < elos.length; w++){
        //   var min = w;
        //   for(var k = w+1; k < elos.length; k++){
        //     if(elos[k] < elos[min])
        //       min = k;
        //   }
        //   if(w !== min){

        //   }
        // }


        for(var i = 1; i <= elos.length; i++){
          //check if player has done provisionals
          if(careerWins[i] + careerLosses[i] < 6){
            playerInfo.update({"player_id":i},{$set:{
              "elo":elos[i],
              "career_wins":careerWins[i],
              "career_losses":careerLosses[i],
              "career_kos":careerKOS[i],
              "career_falls":careerFalls[i],
              "career_win_percent":Math.floor((careerWins[i]/(careerWins[i]+careerLosses[i]))*100),
              "ranked": false
            }
          });

            
            } else {
              playerInfo.update({"player_id":i},{$set:{
                "elo":elos[i],
                "career_wins":careerWins[i],
                "career_losses":careerLosses[i],
                "career_kos":careerKOS[i],
                "career_falls":careerFalls[i],
                "career_win_percent":Math.floor((careerWins[i]/(careerWins[i]+careerLosses[i]))*100),
                "ranked":true
              }});


              }
            }

            playerInfo.find({}).toArray(function(err, result){
              console.log(result);
            });

            db.close();
          });
        });
      });
    }


//Function to put all players stats in order to redo elo calculation
var playerStatRecalc = function(){
  MongoClient.connect(url, function(err, db){
    var playerInfo = db.collection('player_info');

    playerInfo.updateMany({
      "player_id":{$exists: true}},
      {
        $set:{
        "elo":1200,
        "career_kos":0,
        "career_falls":0,
        "career_wins":0,
        "career_losses":0, 
        "ranked":false,
        "career_win_percent":0,
        "rank":0}
      });

    db.close();
    eloCalc();
  });
}

module.exports.playerStatRecalc = playerStatRecalc;
// module.exports.eloCalc = eloCalc;
    // playerStatRecalc();
    // eloCalc();
