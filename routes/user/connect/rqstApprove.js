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
    // if(req.body.)
    dbFrndRqstList.find({ 'to.userName': req.decoded.userName }, (err, frList) => {
        console.log('req.decoded ^*^**^*^*^*^**^*^**^^*^**^^*>>', req.decoded)
        if (err) {
            console.log('err>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>', err)
            res.json({
                success: false,
                msg: err
            })
        } else {
            console.log('friend rqst $%$%$%$%$%$%$%$%$%$%$%$%$%^^>^>^>^>^^>^>^>^>^>^>^>^>', frList)
            frList.forEach((ele, index) => {
                    console.log('for each data &*&*&*&*&*&*&*&*&*&*&*&*&*>>', index, ' -> ', ele)
                    new dbApproveFR({
                        approveRequest: req.body.approveRequest,
                        from: ele,
                        to: req.decoded.userName,
                        at: new Date().toLocaleString()
                    })
                })
                // res.json({
                //     success: true,
                //     'request from': frList
                // })
        }
    })
}