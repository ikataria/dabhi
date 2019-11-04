const mongoose = require('mongoose')
const Schema = mongoose.Schema

/**********POSTS*****************
 * -1 : Deleted
 *  0 : Posted
 *  1 : Updated
 *********************************/

/***********COMMENT**************/
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
/************************************/
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

    upvoteCount: {
        count: Number,
        byWhomDID: [String]
    },

    comment: [{
        comment: String,
        byWhomDID: String,
        commentedAt: Date,
        status: Number
    }]
})

module.exports = mongoose.model('posts', postSchema)