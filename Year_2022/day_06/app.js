// Day 6: Tuning Trouble
/*
look for string of 4 different chars
report index + 1 of 4th char
*/
const input = require('./input');

function findStartSequence(input, size = 4) {
	const str = input.split('');
	let cursor = size;
	let result;

	while (!result && cursor <= str.length) {
		const set = new Set(str.slice(cursor - size, cursor));
		if (set.size === size) {
			result = cursor;
		}
		cursor++;
	}
	return result;
}

console.log("part 1: ", findStartSequence(input));
console.log("part 2: ", findStartSequence(input, 14));


// tests
const testInputs1 = [
	'bvwbjplbgvbhsrlpgdmjqwftvncz', // 5
	'nppdvjthqldpwncqszvftbrmjlhg', // 6
	'nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg', // 10
	'zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw', // 11
];
const expected1 = [5, 6, 10, 11];
const actual1 = testInputs1.map(s => findStartSequence(s));
testInputs1.forEach((str, idx) => console.assert(expected1[idx] === actual1[idx], actual1[idx]));

const testInputs2 = [
	'mjqjpqmgbljsphdztnvjfqwrcgsmlb', // 19
	'bvwbjplbgvbhsrlpgdmjqwftvncz', // 23
	'nppdvjthqldpwncqszvftbrmjlhg', // 23
	'nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg', // 29
	'zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw', // 26
];
const expected2 = [19, 23, 23, 29, 26];
const actual2 = testInputs2.map(s => findStartSequence(s, 14));
testInputs2.forEach((str, idx) => console.assert(expected2[idx] === actual2[idx], actual2[idx]));
