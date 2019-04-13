const express = require('express')
const router = express.Router()

const gameController = require('../controllers/game')


router.post( '/' , gameController.guessPost)


module.exports = router