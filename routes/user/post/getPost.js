const getPost = require('./getPostFunction')

module.exports = (req, res) => {
    getPost(req.decoded.userName).then(data => {
        // console.log('data &^&^&^&^&^&^&^&^&^&^&^&^&^&^&$$$$$$$>>', data)
        res.json({
            success: false,
            post: data
        })
    })
}