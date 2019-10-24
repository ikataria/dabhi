const mongoose = require('mongoose')
const Schema = mongoose.Schema

/**
 * -1 : Deleted
 *  0 : Posted
 *  1 : Updated
 */

const postSchema = new Schema({
    DID: {
        type: String,
    },
    postID: {
        type: String,
        unique: true
    },
    story: {
        type: String,
        required: true,
    },
    fullName: String,
    status: Number,
    createdAt: Date,

    upvoteCount: Number,
    byWhom: [{
        DID: String,
        fullName: String,
        at: Date
    }]
})

module.exports = mongoose.model('posts', postSchema)