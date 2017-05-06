import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';

import { AppComponent }  from './app.component';
// import { RankTableRowComponent } from './rank-table-row.component';
import { RankTableComponent } from './rank-table.component';
import { UnrankTableComponent } from './unrank-table.component';

import { PlayerService } from './player.service';

@NgModule({
  imports: [ BrowserModule, HttpModule ],
  declarations: [ AppComponent, RankTableComponent, UnrankTableComponent ],
  providers: [ PlayerService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
