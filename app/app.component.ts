import { Component } from '@angular/core';


@Component({
    selector: 'my-app',
    template: ` 
    <div class="main-content">
        <div class="section">
            <div class="table-container">
                <thead><h3> Ranked Players </h3></thead>
                    <rank-table></rank-table>

                    <tfoot> *Players are given official ranks after 6 provisional games* </tfoot>
            </div>

            <div class="table-container">
                <thead><h3> Unranked Players </h3></thead>
                <unrank-table></unrank-table>
            </div>
        </div>

        <div>
            <h2 class="archive-heading"> Smash Archives </h2>
                <h3 class="summary-heading"> Project M Weeklies #1 </h3>
                    <p>    Participants: 5<br>
                        <a href="tour1.html" class="link"> Summary </a>
                    </p>

                <h3 class="summary-heading"> Project M Weeklies #2</h3>
                    <p> Participants: 5<br>
                        <a href="tour2.html" class="link">Summary</a>
                    </p>
                <h3 class="summary-heading">Project M Weeklies #3</h3>
                    <p> Participants: 6<br>
                        <a href="tour3.html" class="link">Summary</a>
                    </p>

        </div>
    </div>
    `
})
export class AppComponent { }