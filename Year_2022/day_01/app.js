const input = require('./input.js')

const elves = input.split('\n\n');

let mostNoms = 0;

elves.forEach(cargo => {
	const snacks = cargo.split('\n');
	const calories = snacks.reduce((acc, curr) => acc + +curr, 0)
	if (calories > mostNoms) {
		mostNoms = calories;
	}
})

console.log(mostNoms)