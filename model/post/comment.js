const mongoose = require('mongoose')

/**
 * comment
 * post ID 
 * by whom, on post
 * on whom, on post
 * when on post
 * status :- [
 *            -1 : Deleted,
 *             0 : Present,
 *             1 : Edited 
 *           ]
 *  
 */

const commentSchema = new Schema.mongoose({
    postID: String,
    comment: [{
        type: String,
        byWhom: {
            DID: String,
            userName: String
        },
        commentedAt: Date,
        status: Number
    }]
})

module.exports = mongoose.model('comments', commentSchema)