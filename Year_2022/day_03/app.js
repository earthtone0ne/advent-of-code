// Rucksack reorg
// split array into 2 halves
// find common letter
// count points of letter:
// [a-z]: 1-26 (ascii: 097-122, diff 96)
// [A-Z]: 27-52 (ascii: 065-090, diff 38)

const input = require('./input');

function getCompartments(string) {
	const mid = string.length / 2;
	return [string.slice(0, mid), string.slice(mid)];
}

function findCommonChar([first, second]) {
	return first.split('').find(char => second.includes(char));
}

function findPoints(char) {
	// TODO: replace magic numbers with consts
	const code = char.charCodeAt(0);
	if (code >= 65 && code <= 90) {
		return code - 38;
	} else if (code >= 97 && code <= 122) {
		return code - 96;
	}
}

function go(data) {
	const sacks = data.split('\n');
	return sacks.reduce((acc, sack) => {
		const compartments = getCompartments(sack);
		const char = findCommonChar(compartments);
		return acc += findPoints(char);
	}, 0);
}

console.log(go(input));

// test
// const testData = `vJrwpWtwJgWrhcsFMMfFFhFp
// jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
// PmmdzqPrVvPwwTWBwg
// wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
// ttgJtRGJQctTZtZT
// CrZsJsPPZsGzwwsLwLmpwMDw`;

// const expected = 157;
// const actual = go(testData);
// console.assert(expected === actual, actual);