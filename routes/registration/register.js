const dbRegistration = require('../../model/registration/register')
const dbLogin = require('../../model/registration/userLogin')
const emailData = require('../common/email_templates/emailData')
const mailer = require('../common/nodemailer')
const jwt = require('jsonwebtoken')
const path = require('path')
const ejs = require('ejs')
const generateOTP = () => {
        return Math.floor(1000 + Math.random() * 9000)
    }
    /**
     * validate all fields
     * if all details are recieved then
     * Check wether he has a login, if yes , give err msg
     * check if user previously registered
     * if not, generate new email OTP, verify email
     * save all details
     */

module.exports = (req, res) => {
    try {
        requiredField = [
            'firstName',
            'lastName',
            'dob',
            'email',
            'phone',
            'password'
        ]
        for (let key in req.body) {
            if (requiredField.includes(key) && req.body[key]) {
                let rfi = requiredField.indexOf(key)
                requiredField.splice(rfi, 1)
            }
        }
        if (requiredField.length > 0) {
            res.json({
                success: false,
                msg: 'Please fill all the details'
            })
        } else {
            dbLogin.findOne({ $or: [{ email: req.body.email }, { phone: req.body.phone }] }, (err, lData) => {
                if (err) {
                    res.json({
                        success: false,
                        msg: "Error in processing"
                    })
                } else if (!lData || lData == null) {

                    tokenData = {
                        email: req.body.email,
                        phone: req.body.phone
                    }
                    const token = jwt.sign(tokenData, 'secretKey')
                        /** Above secret key has to be stored in environment variable, but for now we using openly in our source code */
                    dbRegistration.findOne({ $or: [{ email: req.body.email }, { phone: req.body.phone }] }, (err, registerData) => {
                        if (err) {
                            res.json({
                                success: false,
                                msg: "Error in processing request. Please try again after some time"
                            })
                        } else if (!registerData || registerData == null) {

                            new dbRegistration({
                                firstName: req.body.firstName,
                                lastName: req.body.lastName,
                                dob: req.body.dob,
                                email: req.body.email,
                                phone: req.body.phone,
                                password: req.body.password,
                                status: 0,
                                emailVerify: {
                                    otp: generateOTP(),
                                    verified: false
                                }
                            }).save((err, savedData) => {
                                console.log('Registered Data +++++++++++++++++++++++>', savedData)
                                if (err) {
                                    res.json({
                                        success: false,
                                        msg: 'Registration Data not saved, err! '
                                    })
                                } else {
                                    let emailObj = emailData.verifyEmail(req.body.firstName, savedData.emailVerify.otp)

                                    ejs.renderFile(path.join(__dirname + '/../common/email_templates/basic.ejs'), emailObj, (err, html) => {


                                        if (err) {
                                            res.json({
                                                success: false,
                                                msg: 'renderFile err, Please verify the account'
                                            })
                                        } else {
                                            let subject = 'OTP verify'
                                            mailer.sendMail(savedData.email, subject, html).then(data => {
                                                res.json({
                                                    success: true,
                                                    token: token,
                                                    msg: 'Please verify the account'
                                                })
                                            }).catch(err => {
                                                res.json({
                                                    success: false,
                                                    msg: "catch err,Please verify the account."
                                                })
                                            })

                                        }
                                    })

                                }
                            })
                        } else {
                            let newObj = {
                                firstName: req.body.firstName,
                                lastName: req.body.lastName,
                                dob: req.body.dob,
                                email: req.body.email,
                                phone: req.body.phone,
                                password: req.body.password,
                                status: 0,
                                emailVerify: {
                                    otp: generateOTP(),
                                    verified: false
                                }
                            }
                            dbRegistration.update({ $or: [{ email: req.body.email }, { phone: req.body.phone }] }, newObj, (err, updatedData) => {
                                console.log('upDated regis data +++++++++++++++++++++++>', updatedData)
                                if (err) {
                                    res.json({
                                        success: false,
                                        msg: "Server Error. Please try again after some time."
                                    })
                                } else {
                                    let emailObj = emailData.verifyEmail(req.body.firstName, newObj.emailVerify.otp)
                                    ejs.renderFile(path.join(__dirname + '/../common/email_templates/basic.ejs'), emailObj, (err, html) => {
                                        if (err) {
                                            res.json({
                                                success: false,
                                                token: token,
                                                msg: 'renderFile err in same credentials, Please verify the account'
                                            })
                                        } else {
                                            let subject = 'OTP verify'
                                            mailer.sendMail(newObj.email, subject, html).then(data => {
                                                res.json({
                                                    success: true,
                                                    token: token,
                                                    msg: 'Please verify the account'
                                                })
                                            }).catch(err => {
                                                console.log('err>>>>>>>>>>>>', err)
                                                res.json({
                                                    success: false,
                                                    msg: "catch err,Please verify the account."
                                                })
                                            })

                                        }
                                    })
                                }
                            })
                        }
                    })

                } else {
                    res.json({
                        success: false,
                        msg: 'User with same credentials already exists.'
                    })
                }
            })
        }
    } catch (err) {
        console.log(new Date(), __filename, 'catch err')
    }

}