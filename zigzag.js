/* Given a string and a number of lines k, print the string in zigzag form. In zigzag, characters are printed out diagonally from top left to bottom right until reaching the kth line, then back up to top right, and so on.

For example, given the sentence "thisisazigzag" and k = 4, you should print:

t     a     g
 h   s z   a
  i i   i z
   s     g   */

const zizZag = (sentence, k) => {
    const arrToPopulate = new Array(k).fill(null).map(() => new Array(sentence.length).fill(" "))

    for (let y = 0, x = 0, goingDown; x < sentence.length; ++x, goingDown ? ++y : --y) {
        arrToPopulate[y][x] = sentence[x]

        if (y === 0) goingDown = true
        else if (y === k - 1) goingDown = false     
    }

    return arrToPopulate.map((line) => line.join("")).join("\n")
}

console.log(zizZag("blibbityblahh", 7))
