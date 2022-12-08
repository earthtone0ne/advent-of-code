const input = require('./input');
const data = input.split('\n').filter(x => x !== '$ ls');

// function parseData(data, level = 0) {
// 	if (!data.length || level > 50) { return; }
// 	let result = 0;
// 	let dirTotal = 0;
// 	var waitTill = new Date(new Date().getTime() + 1 * 1000);
// 	while (waitTill > new Date()) { }
// 	data.forEach((row, idx) => {
// 		console.log(`level ${level}: '${row.slice(0,9)}' || result: ${result}, dirTotal: ${dirTotal}`)
// 		if (row === '$ cd..') {
// 			return dirTotal > 100_000 ? result : dirTotal + result
// 		} else if (row.startsWith('$ cd ')) {
// 			const subdirTotal = parseData(data.slice(idx + 1), row.split(' ')[2]);
// 			if (subdirTotal <= 100_000) {
// 				result += subdirTotal;
// 			}
// 			dirTotal += subdirTotal;
// 		} else if (row[0].match(/\d/)) {
// 			dirTotal += Number(row.match(/(\d*)/)[0]);
// 		}
// 	});
// 	return result;
// }
function buildTree(data, tree = {}) {
	const keys = [];
	let currentDir = tree;
	let dirTotal = 0;
	data.forEach((row, idx) => {
		if (row.startsWith('$ cd ')) {
			if (keys.length) {
				currentDir._size = dirTotal;
			}
			dirTotal = 0;
			const dirName = row.split('cd ')[1];
			keys.push(dirName);
			currentDir[dirName] = {};
			currentDir = currentDir[dirName]
		} else if (row === '$ cd..') {
			if (!currentDir._size) {
				currentDir._size = dirTotal;
				dirTotal = 0;
			}
			keys.pop();
			currentDir = findNode(tree, keys);
		} else if (row[0].match(/\d/)) {
			dirTotal += Number(row.match(/(\d*)/)[0]);
			if (idx === data.length - 1) {
				currentDir._size = dirTotal;
			}
		}
	})
	return tree
}

function findNode(obj, keys) {
	return keys.reduce((acc, key) => acc[key], obj);
}

let grandTotal = 0;
function getSizes(node) {
	let total = node._size;
	const keys = Object.keys(node).filter(key => key !== '_size');
	if (keys.length) {
		total += keys.reduce((acc, key) => {
			const nodeSize = getSizes(node[key]);
			return acc + nodeSize;
		}, 0);
	}
	if (total <= 100_000) {
		grandTotal += total;
	}
	return total;
}

const testInput = `$ cd /
$ ls
dir a
14848514 b.txt
8504156 c.dat
dir d
$ cd a
$ ls
dir e
29116 f
2557 g
62596 h.lst
$ cd e
$ ls
584 i
$ cd..
$ cd..
$ cd d
$ ls
4060174 j
8033020 d.log
5626152 d.ext
7214296 k`;
const testData = testInput.split('\n');

const expected1 = 95437;
const actual1 = getSizes(buildTree(testData));
console.assert(expected1 === grandTotal, grandTotal);


grandTotal = 0;
let myTotal = getSizes(buildTree(data));
console.log(grandTotal, myTotal)