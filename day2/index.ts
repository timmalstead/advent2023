import {newLine} from "../utils"

const practiceInput = `Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green`.split(newLine)

const practiceGameTotals = {
    red: 12,
    green: 13,
    blue: 14
}

const mappedInput = practiceInput.map((line, i) => {
    const totals = line.split(":")[1]
    const totalArr = totals.split(";")
    const gameTotals = totalArr.map(s => s.trim().split(", "))
    const totalObjs = gameTotals.map((game) => game.reduce((acc, curr) => {
        const [count, color] = curr.split(" ")
        acc[color] = +count
        return acc
    },{}))
    return totalObjs
})

mappedInput.forEach((game) => console.log(game))