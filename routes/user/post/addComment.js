const dbPost = require('../../../model/post/post')
const getPost = require('./getPostFunction')

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
        getPost(req.decoded.userName).then(data => {
            console.log('post data ############################################# array of object ######>', data.post)

        }).catch(err => {
            res.json({
                success: false,
                msg: ' Error while searching for post'
            })
        })
    }
}