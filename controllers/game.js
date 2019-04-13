const numberCache = require('../utils/numberCache')

exports.guessPost = (req, res, next) =>{
    if (req.body.number){
        let numberFromPlayer = req.body.number

        numberFromPlayer = parseInt(numberFromPlayer)

        if (isNaN(numberFromPlayer)) return res.status(404).send('"Number" must be a number')
        
        const numberToGuess = numberCache.getNumber()

        if(numberToGuess===numberFromPlayer){            
            numberCache.setNewNumber()
            return res.status(200).send("Nice one, you guessed :)")
        } else if(numberToGuess>numberFromPlayer){
            return res.status(404).send("Too low :c")
        } else {
            return res.status(404).send("Too much :/")
        }

    }
    return res.status(404).send('To play game you have to include number in your request body(as JSON)')
}