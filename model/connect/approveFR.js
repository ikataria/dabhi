const mongoose = require('mongoose')

const approveSchema = new mongoose.Schema({
    approveRequest: String,
    from: String,
    to: String,
    at: Date

})

module.exports = mongoose.model('rqstApprove', approveSchema)