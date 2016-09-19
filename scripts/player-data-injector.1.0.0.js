/*globals player_info id stats*/
/*eslint-env browser, jquery*/


$(document).ready(function(){  	
    	var tableRowHTML ="";		

	
		var playerSummaryHeader = "    <tr class=\"rank-table-row\">"+
     								"<th> <em>Players</em> </th>"+
    								"<th class=\"table-mains\"> <em>Mains </em></th>"+
   									"<th> <em>Wins </em></th>"+
     								"<th><em>Losses </em></th>"+
      								"<th><em> Win % </em></th>"+
      								"<th><em> KO's </em></th>"+
      								"<th><em> Falls </em></th>"+
      								"<th><em> Elo </em></th>"+
    								"</tr>";  
		
		var player = player_info.player_id[id];
					tableRowHTML += "<tr id=\"" + id + "\""+ "class=\"rank-table-row\">"+
									" <td> " +player_info.player_id[id].player_name + " </td> <td>";

				for(var j = 0; j < player.mains.length; j++){
						tableRowHTML += "<img class=\"icon\" src=\"../icons\\" + player.mains[j] + ".png\" alt=\"" + player.mains[j] + "\"/>";
						if(j !== player.mains.length-1)
							tableRowHTML += "";
					}
					tableRowHTML += "</td>"+
									"<td> " + player.career_wins+ " </td>"+ //wins
									"<td> " + player.career_losses+ "</td>"+ //losses
									"<td> " + Math.floor(player.career_wins /(player.career_wins + player.career_losses)* 100) +"% </td>"+ //win percent
									"<td> " + player.career_kos + "</td>"+ //kos
									"<td> " + player.career_falls + "</td>"+//falls
									"<td> " + player.elo + "</td> </tr>";
				

				//console.log(rows[i-1]);
			
			var appendID = "#" + id + "-table";
			$(appendID).append(playerSummaryHeader);
			$(appendID).append(tableRowHTML);
			
			var matchHistHeader = "<tr class=\"rank-table-row\">"+
								  "<th> <em> Winner </em> </th>"+
								  "<th> <em> Character </em> </th>" + 
								  "<th> <em> KOs </em> </th>"+
								  "<th> <em> Loser </em> </th>"+
								  "<th> <em> Character </em> </th>" + 
								  "<th> <em> KOs </em> </th>"+
								  "<th> <em> Map </em> </th>"+
								  "<th> <em> Week Number </em> </th>";
			var matchHistID = "#" + id + "-match-history";
			$(matchHistID).append(matchHistHeader);
			var matchHistRow = "";
	for(var a = 1; a < stats.week.length; a++){
		for(var b = 1; b < stats.week[a].match.length; b++){
			if(stats.week[a].match[b].winner_id === id){
				matchHistRow += "<tr class=\"rank-table-row\"><td class=\"winner\">" + stats.week[a].match[b].winner+"</td>";
				matchHistRow += "<td> <img class=\"icon\" src=\"../icons\\" + stats.week[a].match[b].winner_char + ".png\" alt=\"" + stats.week[a].match[b].winner_char + "\"/></td>";
				matchHistRow += "<td>" + stats.week[a].match[b].winner_kos + "</td>";
				matchHistRow += "<td>" + stats.week[a].match[b].loser + "</td>";
				matchHistRow += "<td> <img class=\"icon\" src=\"../icons\\" + stats.week[a].match[b].loser_char + ".png\" alt=\"" + stats.week[a].match[b].loser_char + "\"/></td>";
				matchHistRow += "<td>" + stats.week[a].match[b].loser_kos + "</td>";
				matchHistRow += "<td>" + stats.week[a].match[b].map + "</td>";
				matchHistRow += "<td> Project M Weeklies #" + a + "</td></tr>";
				console.log(matchHistRow);
				$(matchHistID).append(matchHistRow);
				matchHistRow = "";
			} else if(stats.week[a].match[b].loser_id === id){
				matchHistRow += "<tr class=\"rank-table-row\"><td>" + stats.week[a].match[b].winner+"</td>";
				matchHistRow += "<td> <img class=\"icon\" src=\"../icons\\" + stats.week[a].match[b].winner_char + ".png\" alt=\"" + stats.week[a].match[b].winner_char + "\"/></td>";
				matchHistRow += "<td>" + stats.week[a].match[b].winner_kos + "</td>";
				matchHistRow += "<td class=\"loser\">" + stats.week[a].match[b].loser + "</td>";
				matchHistRow += "<td> <img class=\"icon\" src=\"../icons\\" + stats.week[a].match[b].loser_char + ".png\" alt=\"" + stats.week[a].match[b].loser_char + "\"/></td>";
				matchHistRow += "<td>" + stats.week[a].match[b].loser_kos + "</td>";
				matchHistRow += "<td>" + stats.week[a].match[b].map + "</td>";
				matchHistRow += "<td> Project M Weeklies #" + a + "</td></tr>";
				console.log(matchHistRow);
				$(matchHistID).append(matchHistRow);
				matchHistRow = "";
			}
		}
	}
	

	
});