from .my_utils import parseInputsToInt


class Day01():
	"""
		Assumptions:
		 - input values are between 1 and target - 1
		 - input has no duplicate values
	"""
	def __init__(self, input=[]):
		self.input = (
			parseInputsToInt('Year_2020/day_01/input.txt') if not input else input
		)
		self.input.sort()

	def find_pair_with_sum(self, target_sum, skip_number=0):
		candidates = self._build_dict()
		for number in self.input:
			counterpart = target_sum - number
			if candidates.get(counterpart) and candidates[counterpart] != skip_number:
				# matching value exists and is not a duplicate of the first number
				print('matches:', number, counterpart, skip_number or '')
				return number * counterpart
			if number >= target_sum:
				# stop searching when remaining values in sorted list are too large
				return 0

	def find_three_with_sum(self, target_sum):
		for number in self.input:
			intermediate_sum = target_sum - number
			match = self.find_pair_with_sum(intermediate_sum, number)
			if match:
				return match * number

	def _build_dict(self):
		candidates = {}
		for number in self.input:
			candidates[number] = True
		return candidates


if __name__ == '__main__':
	print(Day01().find_pair_with_sum(2020))
	print(Day01().find_three_with_sum(2020))
