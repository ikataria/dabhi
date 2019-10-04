const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

mongoose.connect('mongodb://localhost/social', (err, connection) => {
    if (err) {
        console.log(`Can't connect to the database`)
    } else {
        console.log('Successfully connected to the database')
    }
})

app.listen(7000, () => {
    console.log('Listening on server 7000...')
})