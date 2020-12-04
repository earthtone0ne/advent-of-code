import unittest
from unittest.mock import patch
from day_01 import find_pair_with_sum_2020

class Day01Part1(unittest.TestCase):

	def test_example_input(self):
		input = [1721, 979, 366, 299, 675, 456]	
		expected = 514579
		result = find_pair_with_sum_2020(input)
		print('result: ', result)
		assert expected == result


if __name__ == '__main__':
    unittest.main()
