import unittest
from day_03 import Day03

INPUT = '..#.......\n#...#...#..\n.#....#..#.\n..#.#...#.#\n.#...##..#.\n..#.##.....\n.#.#.#....#\n.#........#\n#.##...#...\n#...##....#\n.#..#...#.#'


class TestDay03(unittest.TestCase):

	def test_example_input_part_1(self):
		result = Day03(input=INPUT).count_trees_3_by_1()
		expected = 7
		assert result == expected

if __name__ == '__main__':
	unittest.main()
