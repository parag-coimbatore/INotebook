//Now we will try here to connect to mongoose and this will be our starting point

const connectToMongo= require('./db');


const express = require('express')
const app = express()
const port = 5000

//if you want to use req.body in auth.jsu need to use this middleware
app.use(express.json()) 


//Available routes that has endpoints 1. "/api/auth" 2. "/api/notes"
app.use('/api/auth', require('./routes/auth'))

app.use('/api/notes', require('./routes/notes'))


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

connectToMongo();