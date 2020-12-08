import unittest
from day_04 import Day04

INPUT = 'ecl:gry pid:860033327 eyr:2020 hcl:#fffffd\nbyr:1937 iyr:2017 cid:147 hgt:183cm\n\niyr:2013 ecl:amb cid:350 eyr:2023 pid:028048884\nhcl:#cfa07d byr:1929\n\nhcl:#ae17e1 iyr:2013\neyr:2024\necl:brn pid:760753108 byr:1931\nhgt:179cm\n\nhcl:#cfa07d eyr:2025 pid:166559648\niyr:2011 ecl:brn hgt:59in'


class TestDay04(unittest.TestCase):
	def test_day_04_part_01(self):
		result = Day04(input=INPUT).count_valid_documents()
		expected = 2
		assert result == expected


if __name__ == '__main__':
	unittest.main()