/*globals util*/
var MongoClient = require('mongodb').MongoClient;
var Server = require('mongodb').Server;
var express = require('express');
var app = express();
var url = 'mongodb://sonicfangs:password@ds019053.mlab.com:19053/smash_data';

app.set('view engine', 'ejs');
app.use(express.static(__dirname));
const PORT = 5000;

app.set('port', (process.env.PORT || 5000));

app.get('/', function(req, res){
  var unrankTableString = '';
  var rankTableString = '';
  var unrankTableArray = [], rankTableArray = [];
  var unrankDataTable = [], rankDataTable = [];

  MongoClient.connect(url, function(err, db){
    var playerInfo = db.collection('player_info');
    playerInfo.find({}).toArray(function(err, data){
      var rankedCounter = 1, unrankedCounter = 1;

//////get all players and determine if ranked or unranked
      for(var i = 0; i < data.length; i++){
        if(data[i].ranked == false){
          unrankDataTable.push(data[i]);
        } else {
          rankDataTable.push(data[i]);
        }
      }


///////sort the players based on elos
      for(var w = 0; w < unrankDataTable.length; w++){
        var min = w;
        for(var k = w+1; k < unrankDataTable.length; k++){
          if(unrankDataTable[k].elo < unrankDataTable[min].elo)
            min = k;
        }
        if(w !== min){
          swap(unrankDataTable, w, min);
        }
      }
      for(var w = 0; w < rankDataTable.length; w++){
        var min = w;
        for(var k = w+1; k < rankDataTable.length; k++){
          if(rankDataTable[k].elo < rankDataTable[min].elo)
            min = k;
        }
        if(w !== min){
          swap(rankDataTable, w, min);
        }
      }


//////establish player's ranks
      var rank = 1;
      for(var i = unrankDataTable.length-1; i >= 0; i--){
        unrankDataTable[i].rank = rank;
        rank++;
      }
      rank = 1;
      for(var i = rankDataTable.length-1; i >= 0; i--){
        rankDataTable[i].rank = rank;
        rank++;
      }

      console.log(rankDataTable);
      console.log(unrankDataTable);
///////append all of the players to their respective tables
      for(var i = rankDataTable.length-1; i >= 0; i--){
        rankTableString += '<tr id=\'' + rankDataTable[i].player_id + '\''+ 'class=\'rank-table-row\'>';
        rankTableString += ' <td class=\'rank\'>' + rankDataTable[i].rank + ' </td> ';
        rankTableString += ' <td> <a class=\'link\' href=\'players\\'+ rankDataTable[i].player_name.toLowerCase() +'.html\'>'+
              rankDataTable[i].player_name + ' </a></td> ';

        rankTableString += ' <td>';

        for(var j = 0; j < rankDataTable[i].mains.length; j++){
          rankTableString += '<img class=\'icon\' src=\'icons/' + rankDataTable[i].mains[j] + '.png\' alt=\'' + rankDataTable[i].mains[j] + '\'/>';
        }

        rankTableString += '<td> ' + rankDataTable[i].career_wins+ ' </td>'; //wins
        rankTableString += '<td> ' + rankDataTable[i].career_losses+ '</td>'; //losses
        rankTableString += '<td> ' + Math.floor(rankDataTable[i].career_wins /(rankDataTable[i].career_wins + rankDataTable[i].career_losses)* 100) +'% </td>'; //win percent
        // console.log(data[i].player_name);
        // console.log(data[i].career_wins /(rankDataTable[i].career_wins + rankDataTable[i].career_losses)* 100);
        rankTableString += '<td> ' + rankDataTable[i].career_kos + '</td>'; //kos
        rankTableString += '<td> ' + rankDataTable[i].career_falls + '</td>';//falls
        rankTableString += '<td> ' + rankDataTable[i].elo + '</td>';
        rankTableString += '</tr>';
      }

      for(var i = unrankDataTable.length-1; i >= 0; i--){
        unrankTableString += '<tr id=\'' + unrankDataTable[i].player_id + '\''+ 'class=\'rank-table-row\'>';
        unrankTableString += ' <td class=\'rank\'>' +unrankDataTable[i].rank +  ' </td> ';
        unrankTableString += ' <td> <a class=\'link\' href=\'players\\'+ unrankDataTable[i].player_name.toLowerCase() +'.html\'>'+
              unrankDataTable[i].player_name + ' </a></td> ';

        unrankTableString += ' <td>';

        for(var j = 0; j < unrankDataTable[i].mains.length; j++){
          unrankTableString += '<img class=\'icon\' src=\'icons/' + unrankDataTable[i].mains[j] + '.png\' alt=\'' + unrankDataTable[i].mains[j] + '\'/>';
        }

        unrankTableString += '<td> ' + unrankDataTable[i].career_wins+ ' </td>'; //wins
        unrankTableString += '<td> ' + unrankDataTable[i].career_losses+ '</td>'; //losses
        unrankTableString += '<td> ' + Math.floor(unrankDataTable[i].career_wins /(unrankDataTable[i].career_wins + unrankDataTable[i].career_losses)* 100) +'% </td>'; //win percent
        unrankTableString += '<td> ' + unrankDataTable[i].career_kos + '</td>'; //kos
        unrankTableString += '<td> ' + unrankDataTable[i].career_falls + '</td>';//falls
        unrankTableString += '<td> ' + unrankDataTable[i].elo + '</td>';
        unrankTableString += '</tr>';
      }

      // for(var i = 0; i < data.length; i++){
      //   if(data[i].ranked == false){
      //     console.log(data[i].player_name);
      //     unrankTableString += '<tr id=\'' + data[i].player_id + '\''+ 'class=\'rank-table-row\'>';
			// 		unrankTableString += ' <td class=\'rank\'>' +data[i].rank +  ' </td> ';
      //     unrankTableString += ' <td> <a class=\'link\' href=\'players\\'+ data[i].player_name.toLowerCase() +'.html\'>'+
      //           data[i].player_name + ' </a></td> ';
      //
      //     unrankTableString += ' <td>';
      //
      //     for(var j = 0; j < data[i].mains.length; j++){
      //       unrankTableString += '<img class=\'icon\' src=\'icons/' + data[i].mains[j] + '.png\' alt=\'' + data[i].mains[j] + '\'/>';
      //     }
      //
      //     unrankTableString += '<td> ' + data[i].career_wins+ ' </td>'; //wins
      //     unrankTableString += '<td> ' + data[i].career_losses+ '</td>'; //losses
			// 		unrankTableString += '<td> ' + Math.floor(data[i].career_wins /(data[i].career_wins + data[i].career_losses)* 100) +'% </td>'; //win percent
			// 		unrankTableString += '<td> ' + data[i].career_kos + '</td>'; //kos
			// 		unrankTableString += '<td> ' + data[i].career_falls + '</td>';//falls
			// 		unrankTableString += '<td> ' + data[i].elo + '</td>';
      //     unrankTableString += '</tr>';
      //     unrankTableArray.push(unrankTableString);
      //     console.log(data[i].elo);
      //     unrankTableString = '';
      //   } else {
      //     console.log(data[i].player_name);
      //     rankTableString += '<tr id=\'' + data[i].player_id + '\''+ 'class=\'rank-table-row\'>';
			// 		rankTableString += ' <td class=\'rank\'>' + data[i].rank + ' </td> ';
      //     rankTableString += ' <td> <a class=\'link\' href=\'players\\'+ data[i].player_name.toLowerCase() +'.html\'>'+
      //           data[i].player_name + ' </a></td> ';
      //
      //     rankTableString += ' <td>';
      //
      //     for(var j = 0; j < data[i].mains.length; j++){
      //       rankTableString += '<img class=\'icon\' src=\'icons/' + data[i].mains[j] + '.png\' alt=\'' + data[i].mains[j] + '\'/>';
      //     }
      //
      //     rankTableString += '<td> ' + data[i].career_wins+ ' </td>'; //wins
      //     rankTableString += '<td> ' + data[i].career_losses+ '</td>'; //losses
			// 		rankTableString += '<td> ' + Math.floor(data[i].career_wins /(data[i].career_wins + data[i].career_losses)* 100) +'% </td>'; //win percent
			// 		rankTableString += '<td> ' + data[i].career_kos + '</td>'; //kos
			// 		rankTableString += '<td> ' + data[i].career_falls + '</td>';//falls
			// 		rankTableString += '<td> ' + data[i].elo + '</td>';
      //     rankTableString += '</tr>';
      //     rankTableArray.push(rankTableString);
      //     rankTableString = '';
      //   }
      // }
      //
      // console.log(rankTableArray);
      // console.log(unrankTableArray);
      //
      // for(var w = 0; w < rankTableArray.length; w++){
      //   var min = w;
      //   for(var k = w+1; k < rankTableArray.length; k++){
      //     if(rankTableArray[k] < rankTableArray[min])
      //       min = k;
      //   }
      //   if(w !== min){
      //     swap(rankTableArray, w, min);
      //   }
      // }
      //
      // for(var w = 0; w < unrankTableArray.length; w++){
      //   var min = w;
      //   for(var k = w+1; k < unrankTableArray.length; k++){
      //     if(unrankTableArray[k] < unrankTableArray[min])
      //       min = k;
      //   }
      //   if(w !== min){
      //     swap(unrankTableArray, w, min);
      //   }
      // }
      //
      // console.log(rankTableArray);
      // console.log(unrankTableArray);

      // rankTableArray.forEach(function(result){
      //   rankTableString += result;
      // });
      //
      // unrankTableArray.forEach(function(result){
      //   unrankTableString += result;
      // });
      //


      res.locals.unrank = unrankTableString;
      res.locals.rank = rankTableString;
      res.render('index');
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
