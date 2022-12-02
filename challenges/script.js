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

/* //! Challenge 1 -------------------------------

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
team < team2 && console.log('\ntime2'); */

//! Challenge 2 aula 115 -----------------------
//1 - Loop over the game.scored array and print each player name to the console, along with the goal number (example "Goal 1: Lewandowski")

const information = Object.entries(games.scored);

for ([number, nome] of information) {
  console.log(`Goal ${Number(number) + 1}: ${nome}`);
}

// 2 - Use a loop to calculate the average odd and log it to the console

const oddsValues = Object.values(games.odds);
let soma = 0;
for (values of oddsValues) soma += values;
console.log('\nMédia:', (soma / oddsValues.length).toFixed(2));

/* 3 - Print the 3 odds to the console, but in a nice formatted way, exactly like this: 
Odd of victory Bayern Munich: 1.33 */

console.log(
  `\nOdd of victory ${games.team1}: ${oddsValues[0]}\nOdd of Draw: ${oddsValues[1]}\nOdd of victory ${games.team2}: ${oddsValues[2]}`
);

/* 
BONUS: Create an object called 'scorers' which contains the name of the players who scored as properties, and the number of goals as the value, in this game, it will look like this:
{
  Gnarby:1,
  Hummels:1,
  Lewandowski:2
}
 */

games.scorers = {};

for ([number, nome] of information) {
  games.scorers[nome] ? (games.scorers[nome] += 1) : (games.scorers[nome] = 1);
}
// console.log(games);
console.log('\n', games.scorers);
// console.log(games.scorers.Lewandowski ? 'sim' : 'não');
