import unittest
from day_05 import Day05

INPUT = 'FBFBBFFRLR'
INPUT_2 = 'BFFFBBFRRR'
INPUT_4 = 'BBFFBBFRLL'


class TestDay05(unittest.TestCase):
	def test_example_input_part_1(self):
		result = Day05(input=INPUT).get_max_seat_id()
		expected = (44, 5)
		assert expected == result
	
	def test_example_input_part_1_ex_2(self):
		result = Day05(input=INPUT_2).get_max_seat_id()
		expected = (70, 7)
		assert expected == result
	
	def test_example_input_part_1_ex_4(self):
		result = Day05(input=INPUT_4).get_max_seat_id()
		expected = (102, 4)
		assert expected == result


if __name__ == '__main__':
	unittest.main()
