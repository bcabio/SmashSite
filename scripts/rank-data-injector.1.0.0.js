/*eslint-env browser, jquery*/
/*globals player_info*/
$(document).ready(function(){
	
		var tableHeader = "    <tr class=\"rank-table-row\">"+
									"<th> <em> Rank </em> </th>"+
     								"<th> <em>Players</em> </th>"+
    								"<th class=\"table-mains\"> <em>Mains </em></th>"+
   									"<th> <em>Wins </em></th>"+
     								"<th><em>Losses </em></th>"+
      								"<th><em> Win % </em></th>"+
      								"<th><em> KO's </em></th>"+
      								"<th><em> Falls </em></th>"+
      								"<th><em> Elo </em></th>"+
    								"</tr>";  	
    	var tableRowHTML ="";		
		var rows = [];
		
		function swap(items, firstIndex, secondIndex){
			var temp = items[firstIndex];
			items[firstIndex] = items[secondIndex];
			items[secondIndex] = temp;
		}	
		
	for(var i = 1; i < player_info.player_id.length; i++){
		
		var player = player_info.player_id[i];
		
	
					tableRowHTML += "<tr id=\"" + i + "\""+ "class=\"rank-table-row\">";
					tableRowHTML += " <td class=\"rank\">  </td> ";
					tableRowHTML += " <td> <a class=\"link\" href=\"players\\"+ player_info.player_id[i].player_name.toLowerCase() +".html\">"+
								player_info.player_id[i].player_name + " </a></td> ";
					tableRowHTML += " <td>";
				for(var j = 0; j < player.mains.length; j++){
						tableRowHTML += "<img class=\"icon\" src=\"icons\\" + player.mains[j] + ".png\" alt=\"" + player.mains[j] + "\"/>";
						if(j !== player.mains.length-1)
							tableRowHTML += "";
					}
					tableRowHTML +="</td>";
					tableRowHTML += "<td> " + player.career_wins+ " </td>"; //wins
					tableRowHTML += "<td> " + player.career_losses+ "</td>"; //losses
					tableRowHTML += "<td> " + Math.floor(player.career_wins /(player.career_wins + player.career_losses)* 100) +"% </td>"; //win percent
					tableRowHTML += "<td> " + player.career_kos + "</td>"; //kos
					tableRowHTML += "<td> " + player.career_falls + "</td>";//falls
					tableRowHTML += "<td> " + player.elo + "</td> </tr>";
				
				rows[i-1] = [player.elo,tableRowHTML, player.career_wins+player.career_losses];
				//console.log(rows[i-1]);
		tableRowHTML ="";	
	}	
	for(var w = 0; w < rows.length; w++){//putting the data in *rows*
		var min = w;					   	//in ascending order by elo
		for(var k = w+1; k < rows.length; k++){
			if(rows[k] < rows[min])
				min = k;
		}
		if(w !== min){
			swap(rows, w, min);
		}
	}
	
	//add table rows based on rank and elo
	for(var p = rows.length-1; p >= 0; p--){
			if(rows[p][2] < 6){//checking for ranked or unranked player
				$("#unrank-table").append(rows[p][1]);}
			else
				$("#rank-table").append(rows[p][1]);

		}
			
		$("#unrank-table").append(tableRowHTML);
		$("#rank-table").append(tableRowHTML);
		$("#rank-table").prepend(tableHeader);
		$("#unrank-table").prepend(tableHeader);
		
	//put the rank numbers on the table *** independent of the people on the list so loaded last
		$("#unrank-table .rank").each(function(index){
			$(this).text(index+1);
		});
		
		$("#rank-table .rank").each(function(index){
			$(this).text(index+1);
		});
			

			
	
});