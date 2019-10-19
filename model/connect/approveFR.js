const mongoose = require('mongoose')

const approveSchema = new mongoose.Schema({
    approveRequest: String,
    from: {
        DID: String,
        userName: String,
    },
    to: {
        DID: String,
        userName: String,
    },
    at: Date

})

module.exports = mongoose.model('rqstApprove', approveSchema)