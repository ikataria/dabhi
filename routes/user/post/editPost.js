const dbPost = require('../../../model/post/post')
    // const dbUserlogin = require('../../model/registration/profile')

exports.edit = (req, res) => {
    if (!req.body.postID || req.body.postID == null) {
        res.json({
            success: false,
            msg: 'No Story found ?'
        })
    } else {
        dbPost.findOneAndUpdate({ postID: req.body.postID }, { $set: { status: 1 }, story: req.body.story }, (err, update) => {
            if (err) {
                res.json({
                    success: false,
                    msg: 'Something went wrong'
                })
            } else {
                console.log(new Date(), __filename, '-------->>updated', update)
                res.json({
                    success: true,
                    msg: 'Post successfull updated'
                })
            }
        })
    }
}

exports.delete = (req, res) => {
    if (!req.body.postID || req.body.postID == null) {
        res.json({
            success: false,
            msg: 'No Story found ?'
        })
    } else {
        dbPost.findOneAndUpdate({ postID: req.body.postID }, { $set: { status: -1 } }, (err, deleted) => {
            if (err) {
                res.json({
                    success: false,
                    msg: 'Something went wrong'
                })
            } else {
                console.log(new Date(), __filename, '-------->>deleted', deleted)
                res.json({
                    success: true,
                    msg: 'Post successfull deleted'
                })
            }
        })
    }
}