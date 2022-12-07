// Day 5: Supply Stacks
const input = require('./input');

function parseInput(inputArr) {
	const blankLine = inputArr.indexOf('');
	const stackRows = inputArr.slice(0, blankLine - 1).reverse();
	const stacks = parseStacks(stackRows);
	// const indices = inputArr[blankLine - 1].trim().split('   ');
	const moveRows = inputArr.slice(blankLine + 1);
	const moves = moveRows.map(parseMove);
	return {stacks, moves};
}
function parseMove(move) {
	return move.slice(5).split(/\D\D\D\D*/).map(Number);
}
function parseStacks(stackRows) {
	const stacks = [];
	stackRows.forEach(row => {
		row.split('').forEach((char, idx) => {
			if (idx % 4 === 1 && char.trim()) {
				const stackIdx = (idx + 3) / 4;
				stacks[stackIdx] = stacks[stackIdx] || [];
				stacks[stackIdx].push(char);
			}
		});
	})
	return stacks;
}
/*
  stacks: [
		0: undefined,
		1: [ 'Z', 'N', null ],
		2: [ 'M', 'C', 'D' ],
		3: [ 'P', null, null ]
  ],
  moves: [ [ 1, 2, 1 ], [ 3, 1, 3 ], [ 2, 2, 1 ], [ 1, 1, 2 ] ]
*/
function executeMoves(inputArr, shouldReverse) {
	const { stacks, moves } = parseInput(inputArr);
	moves.forEach(([qty, from, to]) => {
		const cargo = stacks[from].slice(-qty);
		if (shouldReverse) {
			cargo.reverse();
		}
		stacks[from] = stacks[from].slice(0, -qty);
		stacks[to] = stacks[to].concat(cargo);
	})
	return stacks;
}
function getTopItems(stacks) {
	// remove the empty 0 index and get the last item from each stack
	return stacks.slice(1).map(stack => stack.pop()).filter(Boolean).join('');
}

const result = getTopItems(executeMoves(input));
console.log(result);

const testInput = `    [D]    
[N] [C]    
[Z] [M] [P]
 1   2   3 

move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2`;
const testRows = testInput.split('\n')
const expected1 = 'CMZ';
const actual1 = getTopItems(executeMoves(testRows, true));
console.assert(expected1 === actual1, `Part 1 fail: ${actual1}` );

const expected2 = 'MCD';
const actual2 = getTopItems(executeMoves(testRows));
console.assert(expected2 === actual2, `Part 2 fail: ${actual2}` );

