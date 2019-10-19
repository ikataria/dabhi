const mongoose = require('mongoose')

const listSchema = new mongoose.Schema({
    from: {
        DID: String,
        userName: String,
    },
    to: {
        DID: String,
        userName: String,
    },
    createdAt: Date,
    rqstApproved: String
})

module.exports = mongoose.model('frndRqstList', listSchema)