//Now we will try here to connect to mongoose and this will be our starting point

const connectToMongo= require('./db');


const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello Parag!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

connectToMongo();