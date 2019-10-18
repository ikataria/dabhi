const dbProfile = require("../../../model/registration/profile")
const dbFrndRqstList = require("../../../model/connect/frndRqstList")

let findUser = (userName) => {
    return new Promise((resolve, reject) => {
        dbProfile.findOne({ userName: userName }, (err, data) => {
            // console.log('profile data UserName ***************$%$%$%****', data)
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
    // console.log('bodyDATA>^>^>^>^>^>>^>^^>^>^>^>^>^>^>', typeof(req.body.userName))
    if (!req.body.userName || req.body.userName == null) {
        res.json({
            success: false,
            msg: 'Please provide UserName'
        })
    } else {
        dbFrndRqstList.findOne({ $and: [{ 'from.userName': req.decoded.userName }, { 'to.userName': req.body.userName }] }, (err, listData) => {
            if (err) {
                console.log(new Date(), __filename, 'err ^&^&^^&^&^&^&^&^&^&^&^&>>>> ', err)
                res.json({
                    success: false,
                    msg: 'Something went wrong'
                })
            } else if (!listData || listData == null) {
                console.log('decoded data ^^^^^^^^^^^^^^^^^>>>>>>', req.decoded)
                findUser(req.body.userName).then(pData => {
                    new dbFrndRqstList({
                        from: {
                            DID: req.decoded.DID,
                            userName: req.decoded.userName
                        },
                        to: {
                            DID: pData.DID,
                            userName: pData.userName,
                        },
                        createdAt: new Date().toLocaleString()
                    }).save((err, saved) => {
                        console.log(new Date(), __filename, 'Err ==>>>', err)
                        if (err) {
                            res.json({
                                success: false,
                                msg: 'Error while saving friend request list'
                            })
                        } else {
                            console.log(' saved data $%$%$%$%$%$%$%', saved)
                            res.json({
                                success: true,
                                msg: `Friend request send to ${pData.fullName}`
                                    // data: pData
                            })
                        }
                    })


                })
            } else {
                res.json({
                    success: false,
                    msg: 'Friend request already send !'
                })
            }
        })


    }
}