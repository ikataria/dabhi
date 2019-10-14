const mongoose = require('mongoose')

const commentSchema = new Schema.mongoose({
    DID: {
        type: String,
        required: true
    },
    comment: [{
        type: String,
        date: Date,
        required: true
    }],
    commentedBy: {
        firstName: String,
        lastName: String
    }

})

module.exports = mongoose.model('comments', commentSchema)