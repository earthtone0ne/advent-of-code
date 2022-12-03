const input = require('./input.js');
// Rock > Scissors, Scissors > Paper, Paper > Rock
// them: A: rock, B: paper, C: scissors
// x: lose, y: draw, z: win
// win: 6, draw: 3, loss: 0
// points: rock: 1, paper: 2, scissors: 3

// split input into rounds, each round into a tuple
const rounds = input.split('\n').map(r => r.split(' '));
const [A,B,C,X,Y,Z] = "ABCXYZ";
const RESULTS = { win: Z, draw: Y, loss: X, };
const player1 = { rock: A, paper: B, scissors: C, };
const player2 = { rock: X, paper: Y, scissors: Z, };
const scoreByOutcome = { Z: 6, Y: 3, X: 0, };
const scoreByType = { [player2.rock]: 1, [player2.paper]: 2, [player2.scissors]: 3, };

const plays = {
	[player1.rock]: {
		[RESULTS.draw]: player2.rock,
		[RESULTS.loss]: player2.scissors,
		[RESULTS.win]: player2.paper,
	},
	[player1.paper]: {
		[RESULTS.draw]: player2.paper,
		[RESULTS.loss]: player2.rock,
		[RESULTS.win]: player2.scissors,
	},
	[player1.scissors]: {
		[RESULTS.draw]: player2.scissors,
		[RESULTS.loss]: player2.paper,
		[RESULTS.win]: player2.rock,
	},
}

const score = rounds.reduce( (acc, curr) => {
	const [theirPlay, outcome] = curr;
	const myPlay = plays[theirPlay][outcome];
	const typeScore = scoreByType[myPlay];
	const outcomeScore = scoreByOutcome[outcome];
	return acc + outcomeScore + typeScore;
}, 0);

console.log(score);
