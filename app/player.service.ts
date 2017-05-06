import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';

@Injectable()
export class PlayerService { 
	constructor(private http: Http){

	}

	private url: string = 'http://localhost:5000/players';

	getRankedPlayers(): Observable<Player>{
		return this.http.get(this.url + '?ranked=true')

				.map(response => response.json());
	}

	getUnrankedPlayers(): Observable<Player>{
		return this.http.get(this.url + "?ranked=false")

				.map(response => response.json());
	}
}

//Player Model
export interface Player {
	rank: number;
	ID: number;
	player_name: string;
	mains: Array<string>;
	career_wins: number;
	career_losses: number;
	win_percent: number;
	career_kos: number;
	career_falls: number;
	career_win_percent:number;
	elo: number;
}