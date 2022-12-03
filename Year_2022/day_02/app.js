const input = require('./input.js');
// Rock > Scissors, Scissors > Paper, Paper > Rock
// them: A: rock, B: paper, C: scissors
// you : X: rock, Y: paper, Z: scissors
// win: 6, draw: 3, loss: 0
// points: rock: 1, paper: 2, scissors: 3

// split input into rounds, each round into a tuple
const rounds = input.split('\n').map(r => r.split(' '));
const [A,B,C,X,Y,Z] = 'ABCXYZ';
const ITEMS = { rock: 'rock', paper: 'paper', scissors: 'scissors', };
const RESULTS = { win: 'win', draw: 'draw', loss: 'loss', };
const roundScore = { win: 6, draw: 3, loss: 0, };
const player1 = { rock: A, paper: B, scissors: C, };
const player2 = { rock: X, paper: Y, scissors: Z, };
const typeScore = { [player2.rock]: 1, [player2.paper]: 2, [player2.scissors]: 3, };

const OUTCOMES_FOR_P2 = {
	[player1.rock]: {
		[player2.paper]: roundScore.win,
		[player2.scissors]: roundScore.loss,
		[player2.rock]: roundScore.draw,
	},
	[player1.paper]: {
		[player2.scissors]: roundScore.win,
		[player2.rock]: roundScore.loss,
		[player2.paper]: roundScore.draw,
	},
	[player1.scissors]: {
		[player2.rock]: roundScore.win,
		[player2.paper]: roundScore.loss,
		[player2.scissors]: roundScore.draw,
	},
}

const score = rounds.reduce( (acc, curr) => {
	const [theirs, mine] = curr;
	console.log(OUTCOMES_FOR_P2[theirs][mine]);
	const outcome = OUTCOMES_FOR_P2[theirs][mine];
	const multiplier = typeScore[mine];
	return acc + outcome + multiplier;
}, 0);

console.log(score);
