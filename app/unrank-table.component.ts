import { Component } from '@angular/core';

import { Player, PlayerService } from './player.service';
@Component({
    selector: 'unrank-table',
    template: ` <table>
              <tr class="rank-table-row">
                <th> <em> Rank </em> </th>
                <th> <em> Players </em> </th>
                <th class="table-mains"> <em> Mains </em> </th>
                <th> <em> Wins </em> </th>
                <th> <em> Losses </em> </th>
                <th> <em> Win % </em> </th>
                <th> <em> KO's </em> </th>
                <th> <em> Falls </em> </th>
                <th> <em> Elo </em> </th>
              </tr>
              <tr *ngFor="let playerData of playerList" class="rank-table-row">
              	<td class="{{playerData.rank}}"> {{playerData.rank}} </td>
              	<td> <a class="link"> {{playerData.player_name}} </a> </td>
              	<td>
              	 <img *ngFor="let characterImage of playerData.mains" class="icon" src="icons/{{characterImage}}.png" alt="{{characterImage}}"> 
              	</td>
              	<td> {{playerData.career_wins}} </td>
              	<td> {{playerData.career_losses}} </td>
                <td> {{playerData.career_win_percent}}% </td>
              	<td> {{playerData.career_kos}} </td>
              	<td> {{playerData.career_falls}} </td>
              	<td> {{playerData.elo}} </td>
              </tr>
            </table>
    			`
})
export class UnrankTableComponent { 


playerList: Array<Player> = [];
	constructor(playerService: PlayerService){
 

	playerService.getUnrankedPlayers().subscribe(
		res => {
			let tempPlayer: Player;
			let i = 1;
      for(var k in res){
        tempPlayer = res[k];
        tempPlayer["rank"] = i;
        this.playerList.push(tempPlayer);
        i++;
			}
		}, 
		error => console.error('Error: ')
		);
	}

}
