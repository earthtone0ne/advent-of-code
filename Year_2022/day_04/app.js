const input = require('./input');
const data = input.split('\n');

// Day 4 - Camp Cleanup
// count rows where one range fully contains the other

function parseRows(data) {
	return data.map(row => {
		const elves = row.split(',');
		return elves.map(parseRange);
	})
}
function parseRange(range) {
	const [lo, hi] = range.split('-').map(Number);
	return {lo, hi};
}
function getIsContained([elf1, elf2]) {
	// I could early return but this is more clear & concise, and a negligible perf hit
	const firstInSecond = elf1.lo >= elf2.lo && elf1.hi <= elf2.hi;
	const secondInFirst = elf2.lo >= elf1.lo && elf2.hi <= elf1.hi;
	return firstInSecond || secondInFirst;
}
function getHasOverlap([elf1, elf2]) {
	if (elf1.lo > elf2.hi || elf2.lo > elf1.hi) {
		return false;
	}
	return true;
}
function countMatchingRows(data, lambda) {
	const rows = parseRows(data);
	return rows.reduce((acc, row) => {
		if (lambda(row)) {
			acc++;
		}
		return acc;
	}, 0)
}

console.log('Part 1: ', countMatchingRows(data, getIsContained));
console.log('Part 2: ', countMatchingRows(data, getHasOverlap));

// tests
const testInput = `2-4,6-8
2-3,4-5
5-7,7-9
2-8,3-7
6-6,4-6
2-6,4-8`;
const testData = testInput.split('\n');

const expected1 = 2;
const actual1 = countMatchingRows(testData, getIsContained);

console.assert(expected1 === actual1, `Part 1 fail: ${actual1}`);

const expected2 = 4;
const actual2 = countMatchingRows(testData, getHasOverlap);

console.assert(expected2 === actual2, `Part 2 fail: ${actual2}`);
