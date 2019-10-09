const dbRegister = require('../../model/registration/register')
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
            dbRegister.findOne({ email: req.body.email }, (err, registerData) => {
                    if (err) {
                        res.json({
                            success: false,
                            msg: 'Something went wrong'
                        })
                    } else if (!registerData || registerData == null) {
                        res.json({
                            success: true,
                            msg: 'Please Register First'
                        })
                    } else {
                        if (registerData.password == req.body.password) {
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
                                            firstName: registerData.firstName,
                                            lastName: registerData.lastName,
                                            status: registerData.status,
                                            changePassword:
                                        })
                                    }
                                })
                            }
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