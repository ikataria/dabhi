const dbProfile = require('../../model/registration/profile')
const dbLogin = require('../../model/registration/userLogin')
const jwt = require('jsonwebtoken')

/**
 * check the validations
 * check the registration, if registered then give login else ask for registration
 * compare password, if match grant access else give err msg
 */

exports.login = (req, res) => {
    try {
        if (!req.body.email || !req.body.password) {
            res.json({
                success: false,
                msg: 'Please fill all the fields'
            })
        } else {
            dbLogin.findOne({ email: req.body.email }, (err, loginData) => {
                    if (err) {
                        res.json({
                            success: false,
                            msg: 'Something went wrong'
                        })
                    } else if (!loginData || loginData == null) {
                        res.json({
                            success: false,
                            msg: 'Please Register First'
                        })
                    } else {
                        if (loginData.password == req.body.password) {
                            let saveToken = (token) => {
                                dbLogin.findOneAndUpdate({ email: req.body.email }, { $push: { lastLogin: new Date() }, $set: { token: token } }, (err, data) => {
                                    if (err) {
                                        res.json({
                                            success: false,
                                            msg: "something went wrong"
                                        })
                                    } else {
                                        res.json({
                                            success: true,
                                            msg: 'Login Successful',
                                            status: loginData.status,
                                            token: token,
                                            changePassword: loginData.changePassword || false
                                        })
                                    }
                                })
                            }
                            let tokenData = {}
                            dbProfile.findOne({ email: req.body.email }, (err, profile) => {
                                if (err) {
                                    res.json({
                                        success: false,
                                        msg: 'Something went wrong'
                                    })
                                } else {
                                    tokenData = {
                                        _id: loginData._id,
                                        DID: loginData.DID,
                                        fullName: loginData.firstName + "" + loginData.lastName,
                                        // lastName: loginData.lastName,
                                        userName: loginData.userName,
                                        email: loginData.email,
                                        phone: loginData.phone,
                                        // user: 'User'
                                    }
                                    let token = jwt.sign(tokenData, 'secretKey')
                                    saveToken(token)
                                }
                            })
                        } else {
                            res.json({
                                success: false,
                                msg: `Sorry, that didn't work. Please try again`
                            })
                        }
                    }
                })
                // console.log('testing async >>>>>>>>>>', registerData)


        }
    } catch (err) {
        console.log('catch err', err)
    }
}

exports.logout = (req, res) => {
    dbLogin.findOneAndUpdate({ email: req.body.email }, { $set: { token: null } }, (err, logout) => {
        if (err) {
            res.json({
                success: false,
                msg: 'Something went wrong'
            })
        } else {
            res.json({
                success: true,
                msg: 'Logout Successfull'
            })
        }
    })
}