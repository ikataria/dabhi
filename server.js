const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const config = require('./config/config.json')
const app = express()
const process = require('process')
console.log(process.argv)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

mongoose.connect('mongodb://localhost/social', { useNewUrlParser: true }, (err, connection) => {
    if (err) {
        console.log(`Can't connect to the database`)
    } else {
        console.log('Successfully connected to the database')
    }
})
mongoose.set('useUnifiedTopology', true);

let secret = config.SECRET
let port = process.env.PORT || config.PORT

app.set('secretKey', secret)

const indexRoutes = require('./routes/index')
app.use('/', indexRoutes)

// let port = process.env.PORT || 5000
app.listen(port, () => console.log(`Listening on server ${port}...`))