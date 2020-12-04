from my_utils import parseInputsToInt

TARGET_SUM = 2020

def find_pair_with_sum_2020(input):
	input = parseInputsToInt('Year_2020/day_01/input.txt') if not input else input
	candidates = _build_dict(input)
	for number in input:
		counterpart = TARGET_SUM - number
		if candidates.get(counterpart):
			print('pair:', number, counterpart)
			return number * counterpart
	raise Exception('No values found for target sum')
	

def _build_dict(input):
	candidates = {}
	for number in input:
		candidates[number] = True
	return candidates


if __name__ == '__main__':
	print(find_pair_with_sum_2020(None))
