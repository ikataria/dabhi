const dbFrndRqstList = require('../../../model/connect/frndRqstList')
const dbApproveFR = require('../../../model/connect/approveFR')

exports.rqstList = (req, res) => {
    dbFrndRqstList.find({ 'to.userName': req.decoded.userName }, (err, frList) => {
        // console.log('req.decoded ^*^**^*^*^*^**^*^**^^*^**^^*>>', req.decoded)
        if (err) {
            console.log('err>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>')
            res.json({
                success: false,
                msg: err
            })
        } else {
            console.log('friend rqst $%$%$%$%$%$%$%$%$%$%$%$%$%^^>^>^>^>^^>^>^>^>^>^>^>^>', frList)
            res.json({
                success: true,
                'request from': frList
            })
        }
    })
}

exports.rqstApprove = (req, res) => {
    if (!req.body.approveRequest || req.body.approveRequest == null) {
        res.json({
            success: false,
            msg: `Please fill all details`
        })
    } else {
        if (req.body.approveRequest == 'no' || req.body.approveRequest == 'No' || req.body.approveRequest == 'NO') {
            res.json({
                success: false,
                msg: `Friend request declined `
            })
        } else if (req.body.approveRequest == 'yes' || req.body.approveRequest == 'Yes' || req.body.approveRequest == 'YES') {
            /**
             * 1st Find those rqst which have ("" or null) value in rqstApproved in dbFrndRqstList schema
             * 2nd From req.body ask answer from user in 'yes or no' & save new dbApproveFR
             * 3rd Update the rqstApproved field in dbFrndRqstList schema accordingly to dbApproveFR 
             */
            dbFrndRqstList.find({ $and: [{ 'to.userName': req.decoded.userName }, { rqstApproved: { $in: ["", null] } }] }, (err, frList) => {
                // console.log('req.decoded ^*^**^*^*^*^**^*^**^^*^**^^*>>', req.decoded)
                if (err) {
                    console.log('err>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>', err)
                    res.json({
                        success: false,
                        msg: err
                    })
                } else {
                    console.log('friend rqst $%$%$%$%$%$%$%$%$%$%$%$%$%^^>^>^>^>^^>^>^>^>^>^>^>^>', frList)
                    if (frList[0] == null || frList[0] == undefined || !frList[0]) {
                        res.json({
                            success: false,
                            msg: 'No more friend request.'
                        })
                    } else {
                        new dbApproveFR({
                            approveRequest: req.body.approveRequest,
                            from: {
                                DID: frList[0].from.DID,
                                userName: frList[0].from.userName,
                            },
                            to: {
                                DID: req.decoded.DID,
                                userName: req.decoded.userName,
                            },
                            at: new Date().toLocaleString()
                        }).save((err, approved) => {
                            if (err) {
                                console.log(new Date().toLocaleString, __filename, "we got ERROR :::>", err)
                                res.json({
                                    success: false,
                                    msg: 'Something went wrong'
                                })
                            } else {
                                if (approved.approveRequest == 'YES' || approved.approveRequest == 'yes' || approved.approveRequest == 'Yes') {
                                    dbFrndRqstList.findOneAndUpdate({ $and: [{ 'from.userName': approved.from.userName }, { 'to.userName': approved.to.userName }] }, { $set: { rqstApproved: 'yes' } }, (err, updated) => {
                                        console.log('updated data ::::::::::::::::==>>', updated)
                                        if (err) {
                                            console.log(new Date().toLocaleString, __filename, "we got ERROR :::>", "err")
                                            res.json({
                                                success: false,
                                                msg: 'Something went wrong!'
                                            })
                                        } else {
                                            res.json({
                                                success: true,
                                                msg: 'Friend request accepted.',
                                                data: approved
                                            })
                                        }
                                    })
                                }
                            }
                        })
                    }
                }
            })
        } else {
            res.json({
                success: false,
                msg: `Please provide answer in 'yes' or 'no'`
            })
        }
    }
}

// new dbApproveFR({
//     approveRequest: req.body.approveRequest,
//     from: ele,
//     to: req.decoded.userName,
//     at: new Date().toLocaleString()
// }).save((err, approved) => {
//     if (err) {
//         console.log(new Date().toLocaleString, __filename, "we got ERROR :::>", err)
//         res.json({
//             success: false,
//             msg: 'Something went wrong'
//         })
//     } else {
//         res.json({
//             success: true,
//             msg: 'Friend request accepted.',
//             data: approved
//         })
//     }
// })