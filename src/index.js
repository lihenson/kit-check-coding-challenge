import * as fs from 'fs'

const phoneNumber = '762-5387'

const rawString = fs.readFileSync('./src/testData/sample_dictionary.txt')
const dictionary = rawString.toString().split('\r\n')

let parsedNumber = ''
parsedNumber = parsedNumber.concat(...phoneNumber.split('-'))

if (parsedNumber.match(/^[0-9]+$/) === null){
    console.log('Telephone number not valid')
} else {
    console.log('Parsed Phone Number:', parsedNumber)
    let filteredWords = dictionary.filter(word => word.length === parsedNumber.length)
    parsedNumber.split('').forEach((digit, index) => {
        let letterSet = []
        switch(parseInt(digit)) {
            case 0:
                letterSet = ['']
                break
            case 1:
                letterSet = ['']
                break
            case 2:
                letterSet = ['A', 'B', 'C', 'a', 'b', 'c']
                break
            case 3:
                letterSet = ['D', 'E', 'F', 'd', 'e', 'f']
                break
            case 4:
                letterSet = ['G', 'H', 'I', 'g', 'h', 'i']
                break
            case 5:
                letterSet = ['J', 'K', 'L', 'j', 'k', 'l']
                break
            case 6:
                letterSet = ['M', 'N', 'O', 'm', 'n', 'o']
                break
            case 7:
                letterSet = ['P', 'Q', 'R', 'S', 'p', 'q', 'r', 's']
                break
            case 8:
                letterSet = ['T', 'U', 'V', 't', 'u', 'v']
                break
            case 9:
                letterSet = ['W', 'X', 'Y', 'Z', 'w', 'x', 'y', 'z']
                break
        }
        filteredWords = filteredWords.filter(word => letterSet.includes(word[index]))
    })
    console.log('Words:', filteredWords)
}