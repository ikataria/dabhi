const jwt = require('jsonwebtoken')
const dbUserLogin = require('../../model/registration/userLogin')

module.exports = (req, res, next) => {
    let token = req.headers['x-access-token']
    if (token) {
        jwt.verify(token, 'secretKey', (err, decoded) => {
            console.log('decoded data >>>>>>>>>>>>>>>>>>>>>>>>>>>>>.', decoded)
            if (err) {
                res.json({
                    success: false,
                    msg: 'Failed to authenticate token'
                })
            } else {
                // dbUserLogin.findOne({ email: decoded.email, phone: decoded.phone }, (err, login) => {
                //     console.log('...............login data in tokenverify >>>>>>>>', login)
                //     if (err) {
                //         res.json({
                //             success: false,
                //             msg: 'Something went wrong'
                //         })
                //     } else if (login.token && login.token == req.headers['x-access-token']) {
                //         req.decoded = decoded
                //         next()
                //     } else {
                //         res.json({
                //             success: false,
                //             msg: 'Unauthorized token'
                //         })
                //     }
                // })
                if (decoded) {
                    req.decoded = decoded
                    next()
                } else {
                    res.status(401).json({ success: false, msg: 'Unauthorised Token' })
                }
            }
        })
    } else {
        res.json({
            success: false,
            msg: 'Token not found'
        })
    }

}