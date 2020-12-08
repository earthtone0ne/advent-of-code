from validators import validators

REQUIRED_FIELDS = ['byr','iyr','eyr','hgt','hcl','ecl','pid']

class Day04:
	def __init__(self, input=[]):
		self.input = self._read_input_file() if not input else input
		self.docs = self._parse_data()

	def count_valid_documents(self):
		total = 0
		for doc in self.docs:
			total = total + 1 if self.validate_document(doc) else total
		return total

	def validate_document(self, doc):
		for field in REQUIRED_FIELDS:
			if not doc.get(field) or not validators[field](doc[field]):
				return False
		return True

	def _read_input_file(self):
		file = open('Year_2020/day_04/input.txt', 'r')
		data = file.read()
		file.close()
		return data

	def _parse_data(self):
		rows = self.input.split('\n\n')
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
	print(Day04().count_valid_documents())
