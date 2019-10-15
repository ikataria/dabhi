const dbPost = require('../../../model/post/post')

module.exports = (req, res) => {
    if (!req.body.postID || req.body.postID == null) {
        res.json({
            success: false,
            msg: 'No Story Found'
        })
    } else {
        dbPost.findOne({ postID: req.body.postID }, (err, data) => {
            if (err) {
                res.json({
                    success: false,
                    msg: 'Something went wrong'
                })
            } else {
                console.log(__filename, '+++++++++++++++++>', data)
                res.json({
                    success: true,
                    msg: data
                })
            }
        })
    }
}