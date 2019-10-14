const dbComment = require('../../model/post/comment')
const dbPost = require('../../model/post/post')

/**
 * first we will find the post through PID
 * then through PID we can add comment on other user post
 *  
 */

module.exports = (req, res) => {
    if (!req.body.comment || req.body.comment == null) {
        res.json({
            success: false,
            msg: 'No comment ?'
        })
    } else {
        dbComment
    }
}