var player_info={
	
	"player_id":[
		{
			//placeholder
		},
		{ //1
			"player_name":"Brian",
			"elo":1200,
			"career_kos":0,
			"career_falls":0,
			"career_wins":0,
			"career_losses":0,
			"mains":["mr_game_&_watch", "mario","ganondorf"]
		},
		{//2
			"player_name":"Brandon",
			"elo":1200,
			"career_kos":0,
			"career_falls":0,
			"career_wins":0,
			"career_losses":0,
			"mains":["kirby","ike","lucario"]
		},
		{//3
			"player_name":"Shubham",
			"elo":1200,
			"career_kos":0,
			"career_falls":0,
			"career_wins":0,
			"career_losses":0,
			"mains":["falco"]
		},
		{//4
			"player_name":"Marion",
			"elo":1200,
			"career_kos":0,
			"career_falls":0,
			"career_wins":0,
			"career_losses":0,
			"mains":["lucario"]
		},
		{//5
			"player_name":"Michael",
			"elo":1200,
			"career_kos":0,
			"career_falls":0,
			"career_wins":0,
			"career_losses":0,
			"mains":["marth","dedede"]
		}, 
		{//6
			"player_name":"Evin", 
			"elo":1200, 
			"career_kos":0, 
			"career_falls":0, 
			"career_wins":0,
			"career_losses":0,
			"mains":["sheik","ganondorf", "wolf"]
		}, 
		{//7
			"player_name":"Tala", 
			"elo":1200, 
			"career_kos":0, 
			"career_falls":0, 
			"career_wins":0,
			"career_losses":0,
			"mains":["kirby","luigi"]
		}, 
		{//8
			"player_name":"TK", 
			"elo":1200, 
			"career_kos":0, 
			"career_falls":0, 
			"career_wins":0,
			"career_losses":0,
			"mains":["wolf"]
		}
	]
	
};
var s = player_info.player_id;

var stats = {
	"week":[
		{
			//placeholder
		},
		{//week 1
			
			"match":[
				{
					//placeholder
				},
				{//match 1
					"winner":"Marion",
					"winner_id":4,	
					"winner_char":"lucario",
					"winner_kos":4,
					"winner_falls":2,
					"winner_elo":s[4].elo,
					"winner_stats":[s[4].elo, 4, 2],//winner_stats = [elo, kos, falls]
						
					"loser":"Shubham",
					"loser_id":3,
					"loser_char":"falco",
					"loser_kos":2,
					"loser_falls":4,
					"loser_elo":s[3].elo,
					"loser_stats":[s[3].elo, 2, 4],
					"map":"Final Destination"
				},
				{//2
					"winner":"Brian",
					"winner_id":1,
					"winner_char":"marth",
					"winner_kos":4,
					"winner_falls":2,
					"winner_elo":s[1].elo, 
					"winner_stats":[s[1].elo, 4, 2],//winner_stats = [elo, kos, falls]
					
					"loser":"Marion",
					"loser_id":4,
					"loser_char":"lucario",
					"loser_kos":2,
					"loser_falls":4,
					"loser_elo":s[4].elo,
					"loser_stats":[s[4].elo, 2, 4],
					"map":"Final Destination"
				},
				{//3
					"winner":"Brandon",
					"winner_id":2,
					"winner_char":"kirby",
					"winner_kos":4,
					"winner_falls":3,
					"winner_elo":s[2].elo, 
					"winner_stats":[s[2].elo, 4, 3],//winner_stats = [elo, kos, falls]
					
					"loser":"Michael",
					"loser_id":5,
					"loser_char":"marth",
					"loser_kos":3,
					"loser_falls":4,
					"loser_elo":s[5].elo,
					"loser_stats":[s[5].elo, 3, 4],
					"map":"Final Destination"
				},
				{//4
					"winner":"Brandon",
					"winner_id":2,
					"winner_char":"kirby",
					"winner_kos":4,
					"winner_falls":3,
					"winner_elo":s[2].elo, 
					"winner_stats":[s[2].elo, 4, 3],//winner_stats = [elo, kos, falls]
					
					"loser":"Brian",
					"loser_id":1,
					"loser_char":"fox",
					"loser_kos":3,
					"loser_falls":4,
					"loser_elo":s[1].elo,
					"loser_stats":[s[1].elo, 3, 4],
					"map":"Final Destination"
				},
				{//5
					"winner":"Michael",
					"winner_id":5,
					"winner_char":"marth",
					"winner_kos":4,
					"winner_falls":2,
					"winner_elo":s[5].elo, 
					"winner_stats":[s[5].elo, 4, 2],//winner_stats = [elo, kos, falls]
					
					"loser":"Marion",
					"loser_id":4,
					"loser_char":"lucario",
					"loser_kos":2,
					"loser_falls":4,
					"loser_elo":s[4].elo,
					"loser_stats":[s[4].elo, 2, 4],
					"map":"Final Destination"
				},
			]
		},
		
		{//week 2
			"match":[
				{
					//placeholder
				},
				{//match 1
					"winner":"Shubham",
					"winner_id":3,
					"winner_char":"falco",
					"winner_kos":4,
					"winner_falls":3,
					"winner_elo":s[3].elo,
					"winner_stats":[s[3].elo, 4, 3],//winner_stats = [elo, kos, falls]
						
					"loser":"Brandon",
					"loser_id":2,
					"loser_char":"ike",
					"loser_kos":3,
					"loser_falls":4,
					"loser_elo":s[2].elo,
					"loser_stats":[s[2].elo, 3, 4],
					"map":"Final Destination"
				},
				{//match 2
					"winner":"Brian",
					"winner_id":1,
					"winner_char":"marth",
					"winner_kos":4,
					"winner_falls":2,
					"winner_elo":s[1].elo,
					"winner_stats":[s[1].elo, 4, 2],//winner_stats = [elo, kos, falls]
						
					"loser":"Shubham",
					"loser_id":3,
					"loser_char":"falco",
					"loser_kos":2,
					"loser_falls":4,
					"loser_elo":s[3].elo,
					"loser_stats":[s[3].elo, 2, 4],
					"map":"Final Destination"
				},
				{//match 3
					"winner":"Michael",
					"winner_id":5,
					"winner_char":"dedede",
					"winner_kos":4,
					"winner_falls":3,
					"winner_elo":s[5].elo,
					"winner_stats":[s[5].elo, 4, 3],//winner_stats = [elo, kos, falls]
						
					"loser":"Marion",
					"loser_id":4,
					"loser_char":"lucario",
					"loser_kos":3,
					"loser_falls":4,
					"loser_elo":s[4].elo,
					"loser_stats":[s[4].elo, 3, 4],
					"map":"Final Destination"
				},
				{//match 4
					"winner":"Michael",
					"winner_id":5,
					"winner_char":"marth",
					"winner_kos":4,		
					"winner_falls":2,
					"winner_elo":s[5].elo,
					"winner_stats":[s[5].elo, 4, 2],//winner_stats = [elo, kos, falls]
						
					"loser":"Brian",
					"loser_id":1,
					"loser_char":"ganondorf",
					"loser_kos":2,
					"loser_falls":4,
					"loser_elo":s[1].elo,
					"loser_stats":[s[1].elo, 2, 4],
					"map":"Final Destination"
				},
				{//match 5
					"winner":"Brandon",
					"winner_id":2,
					"winner_char":"kirby",
					"winner_kos":4,
					"winner_falls":2,
					"winner_elo":s[2].elo,
					"winner_stats":[s[2].elo, 4, 2],//winner_stats = [elo, kos, falls]
						
					"loser":"Marion",
					"loser_id":4,
					"loser_char":"lucario",
					"loser_kos":2,
					"loser_falls":4,
					"loser_elo":s[4].elo,
					"loser_stats":[s[4].elo, 2, 4],
					"map":"Final Destination"
				},
				{//match 6
					"winner":"Brandon",
					"winner_id":2,
					"winner_char":"kirby",
					"winner_kos":4,
					"winner_falls":3,
					"winner_elo":s[2].elo,
					"winner_stats":[s[2].elo, 4, 3],//winner_stats = [elo, kos, falls]
						
					"loser":"Shubham",
					"loser_id":3,
					"loser_char":"falco",
					"loser_kos":3,
					"loser_falls":4,
					"loser_elo":s[3].elo,
					"loser_stats":[s[3].elo, 3, 4],
					"map":"Final Destination"	
				},
				{//match 7
					"winner":"Brian",
					"winner_id":1,
					"winner_char":"marth",
					"winner_kos":4,
					"winner_falls":2,
					"winner_elo":s[1].elo,
					"winner_stats":[s[1].elo, 4, 2],//winner_stats = [elo, kos, falls]
						
					"loser":"Brandon",
					"loser_id":2,
					"loser_char":"kirby",
					"loser_kos":2,
					"loser_falls":4,
					"loser_elo":s[2].elo,
					"loser_stats":[s[2].elo, 2, 4],
					"map":"Final Destination"
				},
				{//match 8
					"winner":"Michael",
					"winner_id":5,
					"winner_char":"marth",
					"winner_kos":4,
					"winner_falls":3,
					"winner_elo":s[5].elo,
					"winner_stats":[s[5].elo, 4, 3],//winner_stats = [elo, kos, falls]
						
					"loser":"Brian",
					"loser_id":1,
					"loser_char":"sheik",
					"loser_kos":3,
					"loser_falls":4,
					"loser_elo":s[1].elo,
					"loser_stats":[s[1].elo, 3, 4],
					"map":"Final Destination"
				}
			]
		},
		{//week 3
			"match":[
				{//match 1
					"winner":"TK",
					"winner_id":8,
					"winner_char":"wolf",
					"winner_kos":4,
					"winner_falls":3,
					"winner_elo":s[8].elo,
					"winner_stats":[s[8].elo, 4, 3],//winner_stats = [elo, kos, falls]
						
					"loser":"Brian",
					"loser_id":1,
					"loser_char":"fox",
					"loser_kos":3,
					"loser_falls":4,
					"loser_elo":s[1].elo,
					"loser_stats":[s[1].elo, 3, 4],
					"map":"Final Destination"
				},
				{//match 2
					"winner":"Evin",
					"winner_id":6,
					"winner_char":"samus",
					"winner_kos":4,
					"winner_falls":1,
					"winner_elo":s[6].elo,
					"winner_stats":[s[6].elo, 4, 1],//winner_stats = [elo, kos, falls]
						
					"loser":"Tala",
					"loser_id":7,
					"loser_char":"marth",
					"loser_kos":1,
					"loser_falls":4,
					"loser_elo":s[7].elo,
					"loser_stats":[s[7].elo, 1, 4],
					"map":"Final Destination"
				},
				{//match 3
					"winner":"Evin",
					"winner_id":6,
					"winner_char":"ivysaur",
					"winner_kos":4,
					"winner_falls":2,
					"winner_elo":s[6].elo,
					"winner_stats":[s[6].elo, 4, 2],//winner_stats = [elo, kos, falls]
						
					"loser":"Michael",
					"loser_id":5,
					"loser_char":"mr_game_&_watch",
					"loser_kos":2,
					"loser_falls":4,
					"loser_elo":s[5].elo,
					"loser_stats":[s[5].elo, 2, 4],
					"map":"Final Destination"
				},
				{//match 4
					"winner":"TK",
					"winner_id":8,
					"winner_char":"wolf",
					"winner_kos":4,
					"winner_falls":2,
					"winner_elo":s[8].elo,
					"winner_stats":[s[8].elo, 4, 2],//winner_stats = [elo, kos, falls]
						
					"loser":"Marion",
					"loser_id":4,
					"loser_char":"lucario",
					"loser_kos":2,
					"loser_falls":4,
					"loser_elo":s[4].elo,
					"loser_stats":[s[4].elo, 2, 4],
					"map":"Final Destination"
				},
				{//match 5
					"winner":"TK",
					"winner_id":8,
					"winner_char":"wolf",
					"winner_kos":4,
					"winner_falls":3,
					"winner_elo":s[8].elo,
					"winner_stats":[s[8].elo, 4, 3],//winner_stats = [elo, kos, falls]
						
					"loser":"Evin",
					"loser_id":6,
					"loser_char":"wolf",
					"loser_kos":3,
					"loser_falls":4,
					"loser_elo":s[6].elo,
					"loser_stats":[s[6].elo, 1, 4],
					"map":"Final Destination"
				},
				{//match 6
					"winner":"Michael",
					"winner_id":5,
					"winner_char":"marth",
					"winner_kos":4,
					"winner_falls":3,
					"winner_elo":s[5].elo,
					"winner_stats":[s[5].elo, 4, 3],//winner_stats = [elo, kos, falls]
						
					"loser":"Brian",
					"loser_id":1,
					"loser_char":"sheik",
					"loser_kos":3,
					"loser_falls":4,
					"loser_elo":s[1].elo,
					"loser_stats":[s[1].elo, 3, 4],
					"map":"Final Destination"
				},
				{//match 7
					"winner":"Marion",
					"winner_id":4,
					"winner_char":"lucario",
					"winner_kos":4,
					"winner_falls":3,
					"winner_elo":s[4].elo,
					"winner_stats":[s[4].elo, 4, 3],//winner_stats = [elo, kos, falls]
						
					"loser":"Tala",
					"loser_id":7,
					"loser_char":"luigi",
					"loser_kos":3,
					"loser_falls":4,
					"loser_elo":s[7].elo,
					"loser_stats":[s[7].elo, 3, 4],
					"map":"Final Destination"
				},
				{//match 8
					"winner":"Marion",
					"winner_id":4,
					"winner_char":"lucario",
					"winner_kos":4,
					"winner_falls":3,
					"winner_elo":s[4].elo,
					"winner_stats":[s[4].elo, 4, 3],//winner_stats = [elo, kos, falls]
						
					"loser":"Michael",
					"loser_id":5,
					"loser_char":"marth",
					"loser_kos":3,
					"loser_falls":4,
					"loser_elo":s[5].elo,
					"loser_stats":[s[5].elo, 3, 4],
					"map":"Final Destination"
				},
				{//match 9
					"winner":"Marion",
					"winner_id":4,
					"winner_char":"lucario",
					"winner_kos":4,
					"winner_falls":2,
					"winner_elo":s[4].elo,
					"winner_stats":[s[4].elo, 4, 2],//winner_stats = [elo, kos, falls]
						
					"loser":"Evin",
					"loser_id":6,
					"loser_char":"ganondorf",
					"loser_kos":2,
					"loser_falls":4,
					"loser_elo":s[6].elo,
					"loser_stats":[s[6].elo, 2, 4],
					"map":"Final Destination"
				},
				{//match 10
					"winner":"TK",
					"winner_id":8,
					"winner_char":"wolf",
					"winner_kos":4,
					"winner_falls":2,
					"winner_elo":s[8].elo,
					"winner_stats":[s[8].elo, 4, 2],//winner_stats = [elo, kos, falls]
						
					"loser":"Marion",
					"loser_id":4,
					"loser_char":"lucario",
					"loser_kos":2,
					"loser_falls":4,
					"loser_elo":s[4].elo,
					"loser_stats":[s[4].elo, 2, 4],
					"map":"Final Destination"
				},
				{//match 11
					"winner":"TK",
					"winner_id":8,
					"winner_char":"wolf",
					"winner_kos":4,
					"winner_falls":3,
					"winner_elo":s[8].elo,
					"winner_stats":[s[8].elo, 4, 3],//winner_stats = [elo, kos, falls]
						
					"loser":"Tala",
					"loser_id":7,
					"loser_char":"luigi",
					"loser_kos":3,
					"loser_falls":4,
					"loser_elo":s[7].elo,
					"loser_stats":[s[7].elo, 3, 4],
					"map":"Final Destination"
				},
				{//match 12
					"winner":"Brian",
					"winner_id":1,
					"winner_char":"mario",
					"winner_kos":4,
					"winner_falls":1,
					"winner_elo":s[1].elo,
					"winner_stats":[s[1].elo, 4, 1],//winner_stats = [elo, kos, falls]
						
					"loser":"Marion",
					"loser_id":4,
					"loser_char":"lucario",
					"loser_kos":1,
					"loser_falls":4,
					"loser_elo":s[4].elo,
					"loser_stats":[s[4].elo, 1, 4],
					"map":"Final Destination"
				},
				{//match 13
					"winner":"Evin",
					"winner_id":6,
					"winner_char":"ivysaur",
					"winner_kos":4,
					"winner_falls":2,
					"winner_elo":s[6].elo,
					"winner_stats":[s[6].elo, 4, 2],//winner_stats = [elo, kos, falls]
						
					"loser":"TK",
					"loser_id":8,
					"loser_char":"wolf",
					"loser_kos":2,
					"loser_falls":4,
					"loser_elo":s[8].elo,
					"loser_stats":[s[8].elo, 2, 4],
					"map":"Final Destination"
				},
				{//match 14
					"winner":"Brian",
					"winner_id":1,
					"winner_char":"mario",
					"winner_kos":4,
					"winner_falls":2,
					"winner_elo":s[1].elo,
					"winner_stats":[s[1].elo, 4, 2],//winner_stats = [elo, kos, falls]
						
					"loser":"Michael",
					"loser_id":5,
					"loser_char":"mewtwo",
					"loser_kos":2,
					"loser_falls":4,
					"loser_elo":s[5].elo,
					"loser_stats":[s[5].elo, 2, 4],
					"map":"Final Destination"
				},
				{//match 15
					"winner":"Brian",
					"winner_id":1,
					"winner_char":"mr_game_&_watch",
					"winner_kos":4,
					"winner_falls":2,
					"winner_elo":s[1].elo,
					"winner_stats":[s[1].elo, 4, 2],//winner_stats = [elo, kos, falls]
						
					"loser":"Evin",
					"loser_id":6,
					"loser_char":"snake",
					"loser_kos":2,
					"loser_falls":4,
					"loser_elo":s[6].elo,
					"loser_stats":[s[6].elo, 2, 4],
					"map":"Final Destination"
				}
			]
		}
	]
};