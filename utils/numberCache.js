const randomNumber = require('./randomNumber')
const appConfig = require('../appConfig')


let appCache = {
    numberToGuess: randomNumber(appConfig.numberToGuessRange)
 
}

module.exports = {
    setNewNumber: () => {appCache.numberToGuess = randomNumber(appConfig.numberToGuessRange)},
    getNumber: () => appCache.numberToGuess
}
 
