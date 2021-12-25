//Now we will try here to connect to mongoose and this will be our starting point

const connectToMongo= require('./db');


const express = require('express')
const app = express()
const port = 3000

//Available routes that has endpoints 1. "/api/auth" 2. "/api/notes"
app.use('/api/auth', require('./routes/auth'))

app.use('/api/notes', require('./routes/notes'))


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

connectToMongo();