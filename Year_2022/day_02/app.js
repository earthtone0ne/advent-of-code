const input = require('./input.js');
// Rock > Scissors, Scissors > Paper, Paper > Rock
// them: A: rock, B: paper, C: scissors
// you : X: rock, Y: paper, Z: scissors
// win: 6, draw: 3, loss: 0
// points: rock: 1, paper: 2, scissors: 3

// split input into rounds, each round into a tuple
const rounds = input.split('\n').map(r => r.split(' '));
const [A,B,C,X,Y,Z] = "ABCXYZ";
const player1 = { rock: A, paper: B, scissors: C, };
const player2 = { rock: X, paper: Y, scissors: Z, };
const scoreByOutcome = { win: 6, draw: 3, loss: 0, };
const scoreByType = { [player2.rock]: 1, [player2.paper]: 2, [player2.scissors]: 3, };

const outcomes = {
	[player1.rock]: {
		[player2.paper]: scoreByOutcome.win,
		[player2.scissors]: scoreByOutcome.loss,
		[player2.rock]: scoreByOutcome.draw,
	},
	[player1.paper]: {
		[player2.scissors]: scoreByOutcome.win,
		[player2.rock]: scoreByOutcome.loss,
		[player2.paper]: scoreByOutcome.draw,
	},
	[player1.scissors]: {
		[player2.rock]: scoreByOutcome.win,
		[player2.paper]: scoreByOutcome.loss,
		[player2.scissors]: scoreByOutcome.draw,
	},
}

const score = rounds.reduce( (acc, curr) => {
	const [theirs, mine] = curr;
	const outcome = outcomes[theirs][mine];
	const typeScore = scoreByType[mine];
	return acc + outcome + typeScore;
}, 0);

console.log(score);
