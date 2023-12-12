import {newLine, loadInput} from "../utils"

// const firstPracticeInput = `1abc2
// pqr3stu8vwx
// a1b2c3d4e5f
// treb7uchet`
// const splitPractice = firstPracticeInput.split(newLine)

const input = loadInput(__dirname).split(newLine)
// const notDigits = /[^\d]/g

// const firstTotal = input.reduce((acc, currentLine) => {
//     const replaced = currentLine.replace(notDigits,"") 
//     const digit = `${replaced[0]}${replaced[replaced.length - 1]}`

//     acc += Number(digit)
//     return acc
// }, 0)

const reverseString = (str: string) => str.split("").reverse().join("")
const searchValues = [
    "one","two","three","four","five","six","seven","eight","nine",
    "1", "2", "3", "4", "5", "6", "7", "8", "9",
]
const reversedValues = searchValues.map(reverseString)

const values: {[number: string]: string} = {
    1:"1",
    2:"2",
    3:"3",
    4:"4",
    5:"5",
    6:"6",
    7:"7",
    8:"8",
    9:"9",
    one: "1",
    eno: "1",
    two: "2",
    owt: "2",
    three: "3",
    eerht: "3",
    four: "4",
    ruof: "4",
    five: "5",
    evif: "5",
    six: "6",
    xis: "6",
    seven: "7",
    neves: "7",
    eight: "8",
    thgie: "8",
    nine: "9",
    enin: "9"
}

const assignValue = (wordToSearch:string, searchValues: string[]): string | null => {
    for (let i = 0; i < wordToSearch.length; ++i) {
        const slice = wordToSearch.slice(i)
        for (const value of searchValues) 
            if (slice.startsWith(value)) return values[value]
    }
    return null
}

const finalValue = input.reduce((acc, line) => {
    const reversedLine = reverseString(line)
    const digit = `${assignValue(line, searchValues)}${assignValue(reversedLine, reversedValues)}`

    acc += Number(digit)
    return acc
}, 0)

console.log(finalValue)
