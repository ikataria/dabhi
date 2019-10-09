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
    return Promise((resolve, reject) => {
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
    try {
        if (!req.body.emailOtp) {
            res.json({
                success: false,
                msg: 'Please fill the recieved email otp'
            })
        } else {
            dbRegister.findOne({ email: req.decoded.email, phone: req.decoded.phone }, (err, registerData) => {
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
                } else if (registerData.emailVerify.otp == req, body.emailOtp) {
                    generateDID().then()
                }
            })
        }
    } catch (err) {
        console.log(__filename, new Date(), 'err')
    }
}