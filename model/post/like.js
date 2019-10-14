const mongoose = require('mongoose')

const likeSchema = new Schema.mongoose({
    DID: {
        type: String,
        unique: true,
        required: true
    },
    likeCount: Number,
    // date : new Date(),

})

module.exports = mongoose.model('likes', likeSchema)