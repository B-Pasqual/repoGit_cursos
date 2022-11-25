const games = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Devies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],

  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1
[players1, players2] = [games.players[0], games.players[1]];
// console.log(players1, players2);

// 2
[gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);

// 3
[allPlayers] = [...players1, ...players2];
// console.log(allPlayers);

//4
[...playersFinal] = [...players1, 'Thiago', 'Coutinho', 'Peisic'];
// console.log(playersFinal);

//5
let {
  odds: { team1, x, team2 },
} = games;
console.log(team1, x, team2);

// 6
function printGoals(...names) {
  console.log(`\nO jogo teve ${names.length} gols`);
  for (i of names) {
    console.log(i);
  }
}
printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...games.scored);

//7
team1 < team2 && console.log('\ntime 1');
team < team2 && console.log('\ntime2');
