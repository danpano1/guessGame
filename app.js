const express = require('express');
const app = express();

const gameRoutes = require('./routes/game')

app.use(express.json())

app.use('/guess', gameRoutes)

const port = process.env.PORT || 8000

app.listen(port, ()=>{
    console.log(`Server connected on port: ${port}`)
});

if(process.env.NODE_ENV==="test") module.exports = app;