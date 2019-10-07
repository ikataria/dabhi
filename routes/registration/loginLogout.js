const dbRegister = require('../../model/registration/register')
const dbLogin = require('../../model/registration/userLogin')
const jwt = require('jsonwebtoken')

/**
 * check the validations
 * check the registration, if registered then give login else ask for registration
 * compare password, if match grant access else give err msg
 */

exports.login = async(req, res) => {
    try {
        if (!req.body.email || !req.body.password) {
            res.json({
                success: false,
                msg: 'Please fill all the fields'
            })
        } else {
            let rData = await dbRegister.findOne({ email: req.body.email })
                // console.log('testing async >>>>>>>>>>', rData)
            if (!rData) {
                res.json({
                    success: false,
                    msg: 'Please Registred first'
                })
            } else {
                if (rData.password == req.body.password) {
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
                                    firstName: rData.firstName,
                                    lastName: rData.lastName,
                                })
                            }
                        })
                    }
                }
            }

        }
    } catch (err) {
        console.log('catch err', err)
    }
}