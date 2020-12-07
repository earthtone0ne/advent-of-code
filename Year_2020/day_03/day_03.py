TREE = '#'


class Day03:
	def __init__(self, input=[]):
		self.input = self._read_input_file() if not input else input
		self.hill = self._parse_data(self.input)

	def count_trees_by_slope(self, x_increment=3, y_increment=1):
		x_index = 0
		count_trees = 0
		for y_index, row in enumerate(self.hill):
			if y_index % y_increment == 0:
				if row[x_index] == TREE:
					count_trees += 1
				x_index = (x_index + x_increment) % len(row)
			
		return count_trees

	def _read_input_file(self):
		file = open('Year_2020/day_03/input.txt', 'r')
		data = file.read()
		file.close()
		return data

	def _parse_data(self, data):
		return data.split('\n')

if __name__ == '__main__':
	slope_1_1 = Day03().count_trees_by_slope(x_increment=1)
	slope_3_1 = Day03().count_trees_by_slope()
	slope_5_1 = Day03().count_trees_by_slope(x_increment=5)
	slope_7_1 = Day03().count_trees_by_slope(x_increment=7)
	slope_1_2 = Day03().count_trees_by_slope(x_increment=1, y_increment=2)
	print('Part 1:', slope_3_1)
	print(f'Part 2: {slope_1_1}*{slope_3_1}*{slope_5_1}*{slope_7_1}*{slope_1_2} =', \
		slope_1_1 * slope_3_1 * slope_5_1 * slope_7_1 * slope_1_2)
