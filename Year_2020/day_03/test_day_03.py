import unittest
from day_03 import Day03

INPUT = '..#.......\n#...#...#..\n.#....#..#.\n..#.#...#.#\n.#...##..#.\n..#.##.....\n.#.#.#....#\n.#........#\n#.##...#...\n#...##....#\n.#..#...#.#'


class TestDay03(unittest.TestCase):

	def test_example_input_part_1(self):
		result = Day03(input=INPUT).count_trees_by_slope()
		expected = 7
		assert result == expected

	def test_example_input_part_2_1_by_1(self):
		result = Day03(input=INPUT).count_trees_by_slope(x_increment=1)
		expected = 2
		assert result == expected

	def test_example_input_part_2_5_by_1(self):
		result = Day03(input=INPUT).count_trees_by_slope(x_increment=5)
		expected = 3
		assert result == expected

	def test_example_input_part_2_7_by_1(self):
		result = Day03(input=INPUT).count_trees_by_slope(x_increment=7)
		expected = 4
		assert result == expected

	def test_example_input_part_2_1_by_2(self):
		result = Day03(input=INPUT).count_trees_by_slope(x_increment=1, y_increment=2)
		expected = 2
		assert result == expected

	# adding a test case where y_increment changes the outcome
	def test_example_input_part_2_3_by_2(self):
		result = Day03(input=INPUT).count_trees_by_slope(x_increment=3, y_increment=2)
		expected = 2
		assert result == expected

if __name__ == '__main__':
	unittest.main()
