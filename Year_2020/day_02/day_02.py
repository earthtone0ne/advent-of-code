

class Day02:
	def __init__(self, input=[]):
		self.input = self._read_input_file() if not input else input
		self.passwords = self._parse_data(self.input)

	def count_valid_passwords_sled(self):
		valid_count = 0
		for item in self.passwords:
			char_count = item['password'].count(item['char'])
			if char_count >= item['min'] and char_count <= item['max']:
				valid_count += 1
		return valid_count

	def count_valid_passwords_toboggan(self):
		valid_count = 0
		for item in self.passwords:
			password = item['password']
			char_at_first_position = password[item['min'] - 1]
			char_at_second_position = password[item['max'] - 1]
			if (char_at_first_position == item['char'] and char_at_second_position != item['char']) \
				or (char_at_second_position == item['char'] and char_at_first_position != item['char']):
				valid_count += 1
		return valid_count

	def _read_input_file(self):
		file = open('Year_2020/day_02/inputs.txt', 'r')
		data = file.read()
		file.close()
		return data

	def _parse_data(self, data):
		passwords = []
		for row in data.split('\n'):
			sections = row.split(' ')
			rule = [int(x) for x in sections[0].split('-')]
			passwords.append({
				'min': rule[0],
				'max': rule[1],
				'char': sections[1][0],
				'password': sections[2]
			})
		return passwords


if __name__ == '__main__':
	print(Day02().count_valid_passwords_sled())
	print(Day02().count_valid_passwords_toboggan())
