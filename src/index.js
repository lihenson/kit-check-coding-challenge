import * as fs from 'fs'

const rawString = fs.readFileSync('./src/testData/testData.txt')

console.log(rawString.toString())