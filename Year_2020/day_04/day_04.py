

class Day04:
	def __init__(self, input=[]):
		self.input = self._read_input_file() if not input else input
		self.docs = self._parse_data(self.input)

	def validate_docs(self):
		return self.docs[0:3]

	def _read_input_file(self):
		file = open('Year_2020/day_04/input.txt', 'r')
		data = file.read()
		file.close()
		return data

	def _parse_data(self, input):
		rows = input.split('\n\n')
		result = []
		for row in rows:
			fields = row.split()
			document = {}
			for field in fields:
				key, value = field.split(':')
				document[key] = value
			result.append(document)
		return result

if __name__ == '__main__':
	print(Day04().validate_docs())
