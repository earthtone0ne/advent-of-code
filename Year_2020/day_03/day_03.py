TREE = '#'


class Day03:
	def __init__(self, input=[]):
		self.input = self._read_input_file() if not input else input
		self.hill = self._parse_data(self.input)

	def count_trees_3_by_1(self):
		index = 0
		x_increment = 3
		count_trees = 0
		for row in self.hill:
			if row[index] == TREE:
				count_trees += 1
			index = (index + x_increment) % len(row)
		return count_trees

	def _read_input_file(self):
		file = open('Year_2020/day_03/input.txt', 'r')
		data = file.read()
		file.close()
		return data

	def _parse_data(self, data):
		return data.split('\n')

if __name__ == '__main__':
	print(Day03().count_trees_3_by_1())
