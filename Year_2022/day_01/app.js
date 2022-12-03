const input = require('./input.js')

const elves = input.split('\n\n');

const caloriesPerElf = elves.map(cargo => {
	const snacks = cargo.split('\n');
	return snacks.reduce((acc, curr) => acc + +curr, 0);
})

const mostNoms = caloriesPerElf.sort((a, b) => b - a).slice(0, 3);

console.log(mostNoms.reduce((acc, curr) => acc + curr, 0));