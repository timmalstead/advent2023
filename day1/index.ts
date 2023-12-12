import {newLine, loadInput} from "../utils"
const input = loadInput(__dirname).split(newLine)

// const firstPracticeInput = `1abc2
// pqr3stu8vwx
// a1b2c3d4e5f
// treb7uchet`
// const splitPractice = firstPracticeInput.split(newLine)

// const notDigits = /[^\d]/g
// const firstTotal = input.reduce((acc, currentLine) => {
//     const replaced = currentLine.replace(notDigits,"") 
//     const digit = `${replaced[0]}${replaced[replaced.length - 1]}`

//     acc += Number(digit)
//     return acc
// }, 0)

const reverseString = (str: string) => str.split("").reverse().join("")
const glueArrays = (arr: string[]) => arr.reduce((acc,val,i) => {
    acc[val] = i + 1
    return acc
}, {})

const numericValues = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
const wordValues = ["one","two","three","four","five","six","seven","eight","nine"]
const reverseWordValues = wordValues.map(reverseString)
const searchValues = [...numericValues, ...wordValues]
const reversedSearchValues = [...numericValues, ...reverseWordValues]

const resolvedValues: {[number: string]: string} = {
    ...glueArrays(numericValues),
    ...glueArrays(wordValues),
    ...glueArrays(reverseWordValues),
}

const assignValue = (wordToSearch:string, searchValues: string[]): string => {
    for (let i = 0; i < wordToSearch.length; ++i) {
        const slice = wordToSearch.slice(i)
        for (const value of searchValues) 
            if (slice.startsWith(value)) return resolvedValues[value]
    }
}

const finalValue = input.reduce((acc, line) => {
    const reversedLine = reverseString(line)
    const digit = `${assignValue(line, searchValues)}${assignValue(reversedLine, reversedSearchValues)}`

    acc += Number(digit)
    return acc
}, 0)

console.log(finalValue)
