#!/usr/bin/python3
import sys

def wordTransform (word):
	"Transforms word to numbers"
	number=""
	for char in word:
		if char == 'a' or char == 'b' or char == 'c':
			number = number + '2'
		elif char == 'd' or char == 'e' or char == 'f':
			number = number + '3'
		elif char == 'g' or char == 'h' or char == 'i':
			number = number + '4'
		elif char == 'j' or char == 'k' or char =='l':
			number = number + '5'
		elif char == 'm' or char == 'n' or char == 'o':
			number = number + '6'
		elif char == 'p' or char == 'q' or char == 'r' or char == 's':
			number = number + '7'
		elif char == 't' or char == 'u' or char == 'v':
			number = number + '8'
		elif char == 'w' or char == 'x' or char == 'y' or char == 'z':
			number = number + '9'
	return number


if len(sys.argv)==3:
	inFile=open(sys.argv[1], 'r')
	outFile=open(sys.argv[2], 'w')
	for word in inFile:
		outFile.write(word[0:len(word)-1:] + "," + wordTransform(word)+ ";")
	inFile.close()
	outFile.close()
