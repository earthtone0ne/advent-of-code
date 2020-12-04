import unittest
from unittest.mock import patch
from day_01 import Day01

class TestDay01(unittest.TestCase):

	def test_example_input_part_1(self):
		input = [1721, 979, 366, 299, 675, 456]	
		expected = 514579
		result = Day01(input).find_pair_with_sum(2020)
		print('result: ', result)
		assert expected == result

	def test_example_input_part_2(self):
		input = [1721, 979, 366, 299, 675, 456]	
		expected = 241861950
		result = Day01(input).find_three_with_sum(input)
		print('result: ', result)
		assert expected == result


if __name__ == '__main__':
    unittest.main()
