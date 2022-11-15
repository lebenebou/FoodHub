
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const routesURLS = require('./routes/routes.js')
const cors = require('cors')

dotenv.config()

mongoose.connect(process.env.DATABASE_LINK, () => {
    console.log("Connected to Database!")
})

app.use(express.json())
app.use(cors())
app.use('/app', routesURLS)
app.listen(4000, () => console.log("Server is up and running!"))