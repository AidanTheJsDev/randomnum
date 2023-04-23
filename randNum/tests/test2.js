const randNum = require('../index')
const readline = require('readline')
const { stdin, stdout } = require('process')
let settings = {
    minimum: 1,
    maximum: 5
}
let rl = readline.createInterface({
    input: stdin,
    output: stdout
})

let num = randNum(settings)

rl.question('Please pick a number between 1-5: ', (userNum) => {
    if(userNum === `${num}`) {
        console.log('Correct!')
    } else {
        console.log(`You got it wrong! The correct number was ${num}`)
    }
})