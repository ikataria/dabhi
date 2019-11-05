const dbPost = require('../../../model/post/post')
const getPost = require('./getPostFunction')

/**
 * first we will find the post through postID
 * then through postID we can add comment on other user post
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
            // console.log('post data ############################################# array of object ######>', data.post)
            let postIdArr = data.post.map(a => a.postID)
            if (postIdArr.includes(req.params.postID)) {
                let comment = { $push: { comment: { comment: req.body.comment, byWhomDID: req.decoded.DID, commentedAt: new Date(), status: 0 } } }
                dbPost.findOneAndUpdate({ postID: req.params.postID }, comment, (err, comment) => {
                    if (err) {
                        res.json({
                            success: false,
                            msg: 'Something went wrong'
                        })
                    } else {
                        console.log('commented data =-=-=-=-=-=-=-=-=-=-=-=-=-=-=->', comment)
                        res.json({
                            success: true,
                            msg: 'Commented Successfully'
                        })
                    }
                })
            } else {
                console.log('post not found')
                res.json({
                    success: false,
                    msg: 'something went wrong'
                })
            }

        }).catch(err => {
            res.json({
                success: false,
                msg: ' Error while searching for post'
            })
        })
    }
}