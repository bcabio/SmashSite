/*globals stats player_info*/

/*eslint-env browser, jquery*/
<!--

function matchNew(week_number, match_number){

	var statRef = stats.week[week_number].match[match_number];
	var m = [];
	var winnerTemp = player_info.player_id[statRef.winner_id];
	var loserTemp = player_info.player_id[statRef.loser_id];
	//console.log(loserTemp.player_name + " elo " + loserTemp.elo);
	//console.log(winnerTemp.player_name + " elo " + winnerTemp.elo);
	var expectedScoreWinner = 1/(1+Math.pow(10,(loserTemp.elo-winnerTemp.elo)/400));
	var expectedScoreLoser = 1/(1+Math.pow(10,(winnerTemp.elo-loserTemp.elo)/400));
	var fdk = statRef.winner_falls/statRef.winner_kos;
	var kdf = statRef.loser_kos/statRef.loser_falls;

	m[0] = Math.floor(winnerTemp.elo + 32*(1-expectedScoreWinner)*(1.75-fdk)); //winner elo
	m[1] = statRef.winner_id;//winner id
	m[2] = statRef.winner_falls;
	m[3] = Math.floor(loserTemp.elo + 32*(0-expectedScoreLoser)*(1.75-kdf)); //loser elo
	m[4] = statRef.loser_id;//loser id
	m[5] = statRef.loser_kos;
	return m; //[winner elo, winner id, winner_falls, loser elo, loser id, loser kos]

}

for(var i = 1; i <stats.week.length; i++){
	for(var j = 1; j < stats.week[i].match.length;j++){
		var temp = matchNew(i, j);
		player_info.player_id[temp[1]].elo = temp[0];//replace winner's elo in stats object
		player_info.player_id[temp[1]].career_wins += 1;//add to winner's career wins
		player_info.player_id[temp[1]].career_kos += 4;
		player_info.player_id[temp[1]].career_falls += temp[2];

		player_info.player_id[temp[4]].elo = temp[3];//replace loser's elo in stats object
		player_info.player_id[temp[4]].career_losses += 1;
		player_info.player_id[temp[4]].career_kos+= temp[5];
		player_info.player_id[temp[4]].career_falls += 4;
	}
}



-->
