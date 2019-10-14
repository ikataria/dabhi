const dbPost = require('../../model/post/updatePost')
const dbUserlogin = require('../../model/registration/profile')

module.exports = (req, res) => {
    if (!req.body.story || req.body.story == null) {
        res.json({
            success: false,
            msg: 'No Story Today ?'
        })
    } else {
        new dbPost({
            DID: req.decoded.DID,
            story: req.body.story,
            date: new Date()
        }).save((err, savedPost) => {
            if (err) {
                res.json({
                    success: false,
                    msg: 'Something went wrong'
                })
            } else {
                res.json({
                    success: true,
                    data: savedPost
                })
            }
        })
    }
}