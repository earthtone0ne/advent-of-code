
def parseInputsToInt(filePath):
	file = open(filePath, 'r')
	numberStrings = file.read().split('\n')
	return [int(string) for string in numberStrings]