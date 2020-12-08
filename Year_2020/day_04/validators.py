import re

def _min_max(min, max):
	return lambda n: n.isdigit() and int(n) >= min and int(n) <= max

def _birth_year(value):
	return _min_max(1920, 2002)(value)

def _issue_year(value):
	return _min_max(2010, 2020)(value)

def _exp_year(value):
	return _min_max(2020, 2030)(value)

def _height(value):
	unit = value[-2:]
	num = value[0:-2]
	units = {
    'in': _min_max(59, 76),
		'cm': _min_max(150, 193)
	}
	return units[unit](num) if units.get(unit) else False

def _hair_color(value):
	return re.fullmatch(r'#[0-9a-f]{6}', value)

def _eye_color(value):
	VALID_COLORS = ['amb','blu','brn','gry','grn','hzl','oth']
	return value in VALID_COLORS

def _passport_id(value):
	return re.fullmatch(r'[0-9]{9}', value)

validators = {
	'byr': _birth_year,
	'iyr': _issue_year,
	'eyr': _exp_year,
	'hgt': _height,
	'hcl': _hair_color,
	'ecl': _eye_color,
	'pid': _passport_id
}
