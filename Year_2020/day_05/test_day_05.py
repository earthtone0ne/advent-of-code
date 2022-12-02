import unittest
from day_05 import Day05

INPUT = 'FBFBBFFRLR'


class TestDay05(unittest.TestCase):
	def test_example_input_part_1(self):
		result = Day05(input=INPUT).get_max_seat_id()
		expected = 357
		assert expected == result

if __name__ == '__main__':
	unittest.main()
