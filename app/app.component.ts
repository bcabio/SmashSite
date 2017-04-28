import { Component } from '@angular/core';
@Component({
    selector: 'my-app',
    template: ` <table id="rank-table">
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
            </table>
    			`
})
export class AppComponent { }