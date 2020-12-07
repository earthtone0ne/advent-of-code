import unittest
from day_02 import Day02


INPUT = '1-3 a: abcde\n1-3 b: cdefg\n2-9 c: ccccccccc'
INPUT_2 = '1-3 a: abcdeaa\n1-3 b: cdefg\n2-9 c: cccccccccc\n1-2 d: abcddd'

class TestDay02(unittest.TestCase):

	def test_example_input_part_1(self):
		result = Day02(input=INPUT).count_valid_passwords_sled()
		expected = 2
		assert result == expected

	def test_example_input_part_1_again(self):
		result_2 = Day02(input=INPUT_2).count_valid_passwords_sled()
		expected_2 = 1
		assert result_2 == expected_2

	def test_example_input_part_2(self):
		result = Day02(input=INPUT).count_valid_passwords_toboggan()
		expected = 1
		assert result == expected

	def test_example_input_part_2_again(self):
		result = Day02(input=INPUT_2).count_valid_passwords_toboggan()
		expected = 1
		assert result == expected


if __name__ == '__main__':
    unittest.main()
