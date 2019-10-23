const mongoose = require('mongoose')

/**
 * Num of likes on post
 * post ID 
 * by whom on post
 * on whom on post
 * when on post
 */

const upvoteSchema = new mongoose.Schema({
    upvote: Number,
    postID: String,
    byWhom: [{
        DID: String,
        fullName: String,
        at: Date
    }],
    onWhom: {
        DID: String,
        fullName: String
    },
})

module.exports = model.mongoose('upvotes', upvoteSchema)