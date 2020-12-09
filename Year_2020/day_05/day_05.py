

class Day05:
	def __init__(self, input=[]):
		self.input = self._read_input_file() if not input else input
		self.seat_codes = self._parse_data(self.input)
		self.row = {
			'start': 0,
			'end': 127
		}
		self.seat = {
			'start': 0,
			'end': 7
		}

	def get_max_seat_id(self):
		# max_id = 0
		for code in self.seat_codes:
			# row = -1
			# seat = -1
			for char in code[0:7]:
				self._check_next(self.row, char)
			for char in code[7:]:
				self._check_next(self.seat, char)
		return self.row['start'], self.seat['start']

	def _check_next(self, entity, char):
		if char in ['F', 'L']:
			self._limit_to_first_half(entity)
		else:
			self._limit_to_last_half(entity)

	def _limit_to_first_half(self, entity):
		entity['end'] -= round((entity['end'] - entity['start'] + 0.5) / 2)

	def _limit_to_last_half(self, entity):
		entity['start'] += round((entity['end'] - entity['start'] + 0.5) / 2)

	def _read_input_file(self):
		file = open('Year_2020/day_05/input.txt', 'r')
		data = file.read()
		file.close()
		return data

	def _parse_data(self, data):
		return data.split('\n')

if __name__ == '__main__':
	print(Day05(input='FBFBBFFRLR').get_max_seat_id())

