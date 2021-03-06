const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const helmet = require('helmet')
const compression = require('compression')
const config = require('./config/config.json')
const app = express()
console.log('process array >>>>>>[]>>', process.argv)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(helmet())
app.use(compression())
const mongoURI = config.MONGO_URI

mongoose.connect(mongoURI, { useNewUrlParser: true }, (err, connection) => {
    if (err) {
        console.log(`Can't connect to the database`, err)
    } else {
        console.log('Successfully connected to the database')
    }
})

/******************* local Database ******************/
// mongoose.connect("mongodb://localhost/dummyData", { useNewUrlParser: true, useUnifiedTopology: true }, (err, connection) => {
//     // console.log('connection data :::::', connection)
//     if (err) {
//         console.log(`Can't connect to the database`, err)
//     } else {
//         console.log('----------Successfully connected to the database----------')
//     }
// })
/********************************************************/

mongoose.set('useUnifiedTopology', true);

let secret = config.SECRET
let port = process.env.PORT || config.PORT

app.set('secretKey', secret)

const indexRoutes = require('./routes/index')
app.use('/', indexRoutes)

// let port = process.env.PORT || 5000
app.listen(port, () => console.log(`Listening on server ${port}...`))