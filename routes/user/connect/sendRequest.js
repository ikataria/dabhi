const dbProfile = require("../../../model/registration/profile")

let findUser = (userName) => {
    return new Promise((resolve, reject) => {
        if (!req.body.userName || req.body.userName == null) {
            res.json({
                success: false,
                msg: 'Please provide UserName'
            })
        } else {
            dbProfile.findOne({ userName: userName }, (err, data) => {
                if (err) {
                    reject({
                        success: false,
                        msg: 'Something went wrong'
                    })
                } else {
                    resolve(data)
                }
            })
        }
    })
}

module.exports = (req, res) => {
    if (!req.body.userName || req.body.userName == null) {
        res.json({
            success: false,
            msg: 'Please provide UserName'
        })
    } else {
        dbProfile.findOne({ userName: req.body.userName }, (err, profileData) => {
            if (err) {
                res.json({
                    success: false,
                    msg: 'something went wrong'
                })
            } else {

            }
        })
    }
}