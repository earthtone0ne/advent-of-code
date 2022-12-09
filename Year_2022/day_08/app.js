// Day 8: Treetop Tree House 
/* 
? create rotated array for vertical?
for indexes i, j:
- if i or j are 0/last, visible
- from L-R:
	- maxFromLeft = row[0]
	- if i > max(L), ++; max = 1
	- if i > max(R),

*/

const data = require('./input').split('\n');

function pivotArray(rows) {
	const result = Array(rows[0].length);
	return rows.reduce((acc, row) => {
		row.split('').forEach((tree, i) => {
			acc[i] = [...acc[i] || [], tree]
		});
		return acc;
	}, result);
}
function checkIfVisible({ row, col, i, j, tree }) {
	const maxLeft = Math.max(...row.slice(0, j));
	const maxRight = Math.max(...row.slice(j + 1));
	const maxUp = Math.max(...col.slice(0, i));
	const maxDown = Math.max(...col.slice(i + 1))
	return tree > Math.min(maxLeft, maxRight, maxUp, maxDown);
}
function scopeVisibleTrees(rows) {
	const cols = pivotArray(rows);
	const width = rows.length;
	const height = cols.length;
	// count first and last rows and columns, then skip them
	let visibleCount = width * 2 + (height - 2) * 2;
	let maxScenicScore = 0;
	for (let i = 1; i < width - 1; i++) {
		const row = rows[i].split('');
		for (let j = 1; j < height - 1; j++) {
			const col = cols[j]
			const tree = row[j];
			if (checkIfVisible({ row, col, i, j, tree })) {
				visibleCount++;
			}
		}
	}
	return visibleCount;
}

console.log("1. Visible: ", scopeVisibleTrees(data))

// tests
const testData = `30373
25512
65332
33549
35390`.split('\n');

const expected1 = 21;
const actual1 = scopeVisibleTrees(testData);
console.assert(expected1 === actual1, "Part 1 fail: " + actual1)