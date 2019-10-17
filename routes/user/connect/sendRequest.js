const dbProfile = require("../../../model/registration/profile")

let findUser = (userName) => {
    return new Promise((resolve, reject) => {
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
    })
}

module.exports = (req, res) => {
    if (!req.body.userName || req.body.userName == null) {
        res.json({
            success: false,
            msg: 'Please provide UserName'
        })
    } else {
        findUser(req.body.userName).then(pData => {
            dbProfile.findOne({ userName: pData }, (err, profileData) => {
                if (err) {
                    res.json({
                        success: false,
                        msg: 'something went wrong'
                    })
                } else {
                    console.log('Profile data>>>>>>>>>>^^^>^>^>^>^>^>^>^>^>^>', profileData)
                    res.json({
                        success: true,
                        data: profileData
                    })
                }
            })
        })

    }
}