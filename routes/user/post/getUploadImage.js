const dbImage = require('../../../model/post/imageModel')

module.exports = (req, res) => {
    dbImage.findOne({ uploaderDID: req.decoded.DID }, (err, data) => {
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