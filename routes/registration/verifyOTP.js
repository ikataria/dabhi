const dbRegister = require('../../model/registration/register')
const dbUserLogin = require('../../model/registration/userLogin')
const dbUserProfile = require('../../model/registration/profile')

const ejs = require('ejs')
const path = require('path')
const moment = require('moment')

const mailer = require('../common/nodemailer')
const emailData = require('../common/email_templates/emailData')

const day = moment().format('DD')
const month = moment().format('MM')
const year = moment().format('YYYY')


// Generating new DID 
const generateDID = () => {
    return new Promise((resolve, reject) => {
        // let date = moment().format('DD-MM-YY')
        // let acDate = moment(date, 'DD-MM-YY').toDate()
        dbUserLogin.count({}, (err, count) => {
            if (err) {
                reject({
                    success: false,
                    msg: `Something went wrong`
                })
            } else {
                let newCount = ++count
                let final = newCount > 9 ? "" + newCount : "0" + newCount
                resolve('DID' + day + month + year + final)
            }
        })
    })
}

module.exports = (req, res) => {
    // console.log('<<<<<<<<<<<<<<<<<<<here>>>>>>>>>>>>>>>>>>>>>> ')
    try {
        if (!req.body.emailOtp) {
            res.json({
                success: false,
                msg: 'Please fill the recieved email otp'
            })
        } else {
            dbRegister.findOne({ email: req.decoded.email, phone: req.decoded.phone }, (err, registerData) => {
                // console.log('verifyOtp registerData >>>>>>>>>>>>>>>>>>..', registerData)
                if (err) {
                    res.json({
                        success: false,
                        msg: 'Something went wrong'
                    })
                } else if (!registerData || registerData == null) {
                    res.json({
                        success: false,
                        msg: 'Please register first'
                    })
                } else if (registerData.emailVerify.otp == req.body.emailOtp) {
                    // console.log('BODY **********>>', req.body)
                    // console.log('registerDATA >>>>>>>>>>*>*>*>*>*>', registerData)
                    generateDID().then(DID => {
                        console.log('DID>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>', DID)
                        new dbUserLogin({
                            DID: DID,
                            firstName: registerData.firstName,
                            lastName: registerData.lastName,
                            userName: registerData.userName,
                            dob: registerData.dob,
                            email: registerData.email,
                            phone: registerData.phone,
                            status: 1,
                            fullName: registerData.firstName + "" + registerData.lastName,
                            password: registerData.password,
                            createdAt: new Date()
                        }).save((err, savedLogin) => {
                            console.log('login err >>>>>>>>>>>>>>>>>>', err)
                            if (err) {
                                res.json({
                                    success: false,
                                    msg: 'Error while saving Login Data, Please try after some time 1'
                                })
                            } else {
                                new dbUserProfile({
                                    DID: DID,
                                    fullName: registerData.firstName + " " + registerData.lastName,
                                    firstName: registerData.firstName,
                                    lastName: registerData.lastName,
                                    userName: registerData.userName,
                                    email: registerData.email,
                                    phone: registerData.phone,
                                    createdAt: new Date(),
                                    status: 1,
                                    active: true
                                }).save((err, savedProfile) => {
                                    if (err) {
                                        console.log('ERR0 >>>>>>>>>>>>>>>>>>', err)
                                        res.json({
                                            success: false,
                                            msg: 'Error while saving Login Data, Please try after some time 1'
                                        })
                                    } else {
                                        dbRegister.findOneAndUpdate({ email: req.decoded.email, phone: req.decoded.phone }, { $set: { status: 1, 'emailVerify.verified': true, 'emailVerify.verifiedAt': new Date(), } }, (err, update) => {
                                            let emailObj = emailData.welcomeEmail(registerData.firstName, `www.Dabhi.com`)
                                            ejs.renderFile(path.join(__dirname + '/../common/email_templates/basic.ejs'), emailObj, (err, html) => {
                                                if (err) {
                                                    console.log('ERR >>>>>>>>>>', err)
                                                    res.json({
                                                        success: false,
                                                        msg: "Registration failed"
                                                    })
                                                } else {
                                                    let subject = 'Welcome Dabhi !'
                                                    mailer.sendMail(registerData.email, subject, html).then(data => {
                                                        console.log('email data %%%%%%%%%%%%%%%%>>', data)
                                                        res.json({
                                                            success: true,
                                                            msg: 'Registration successfull'
                                                        })
                                                    }).catch(err => {
                                                        res.json({
                                                            success: true,
                                                            msg: 'Registration successfull'
                                                        })
                                                    })
                                                }
                                            })
                                        })
                                    }
                                })
                            }
                        })
                    }).catch(err => {
                        console.log(__filename, new Date(), '--=', err)
                        res.json({
                            success: false,
                            msg: "Something went wrong. Please try again."
                        })
                    })
                } else {
                    res.json({
                        success: false,
                        msg: 'OTP mismatch'
                    })
                }
            })
        }
    } catch (err) {
        console.log(__filename, new Date(), err)
    }
}