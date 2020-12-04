from my_utils import parseInputsToInt


class Day01():
	def __init__(self, input=None):
		self.input = parseInputsToInt('Year_2020/day_01/input.txt') if input is None else input
		self.target_grand_total = 2020

	def find_pair_with_sum(self, target_sum):
		candidates = self._build_dict()
		for number in self.input:
			counterpart = target_sum - number
			if candidates.get(counterpart):
				print('pair:', number, counterpart)
				return number * counterpart
		raise Exception('No values found for target sum')

	def find_three_with_sum(self, target_sum):
		pass

	def _build_dict(self):
		candidates = {}
		for number in self.input:
			candidates[number] = True
		return candidates


if __name__ == '__main__':
	print(Day01().find_pair_with_sum(2020))
