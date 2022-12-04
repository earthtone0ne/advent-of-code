// Rucksack reorg
// split array into 2 halves
// find common letter
// count points of letter:
// [a-z]: 1-26 (ascii: 097-122, diff 96)
// [A-Z]: 27-52 (ascii: 065-090, diff 38)

const input = require('./input');
const sacks = input.split('\n');

function getCompartments(string) {
	const mid = string.length / 2;
	return [string.slice(0, mid), string.slice(mid)];
}

function findCommonChars(first, second) {
	return first.split('').filter(char => second.includes(char));
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

function getInventoryScore(data) {
	return data.reduce((acc, sack) => {
		const compartments = getCompartments(sack);
		const char = findCommonChars(...compartments)[0];
		return acc += findPoints(char);
	}, 0);
}
function getElfGroups(data) {
	const groups = [];
	for (let i = 0; i < data.length; i +=3) {
		groups.push([
			data[i], data[i+1], data[i+2]
		])
	}
	return groups;
}

function getGroupBadgeScore(group) {
	const firstPairCommons = findCommonChars(group[0], group[1]).join('');
	const badgeChar= findCommonChars(firstPairCommons, group[2]).pop();
	return findPoints(badgeChar);
}

function getBadgeScoreTotal(data) {
	const teams = getElfGroups(data);
	return teams.reduce((acc, team) => acc + getGroupBadgeScore(team),0)
}

console.log("Inventory score: ", getInventoryScore(sacks));
console.log("Badge score: ", getBadgeScoreTotal(sacks));

// tests
const testData = `vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw`;

const expectedInv = 157;
const actualInv = getInventoryScore(testData.split('\n'));
console.assert(expectedInv === actualInv, `Inventory fail: ${actualInv}`);

const expectedBadge = 70;
const actualBadge = getBadgeScoreTotal(testData.split('\n'));
console.assert(expectedBadge === actualBadge, `Badge fail: ${actualBadge}`);
