// const dbUserlogin = require('../../../model/registration/profile')
const dbPost = require('../../../model/post/post')
const moment = require('moment')

const generatePostID = function() {
    return new Promise((resolve, reject) => {
        dbPost.count({}, (err, count) => {
            if (err) {
                reject({
                    success: false,
                    msg: `Can't generate PostId`
                })
            } else {
                let date = moment().format('DDMMYYYY')
                let final = count > 9 ? '' + count : '0' + count
                resolve('PID' + date + final)
            }
        })
    })
}



module.exports = (req, res) => {
    if (!req.body.story || req.body.story == null) {
        res.json({
            success: false,
            msg: 'No Story Today ?'
        })
    } else {
        generatePostID().then(PID => {
            new dbPost({
                DID: req.decoded.DID,
                fullName: req.decoded.fullName,
                postID: PID,
                story: req.body.story,
                date: new Date(),
                status: 0
            }).save((err, savedPost) => {
                console.log('Story >>>>>>>>>>..', savedPost)
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
        })

    }
}