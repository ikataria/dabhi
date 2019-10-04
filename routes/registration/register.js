const dbRegistration = require('../../model/registration/register')
const dbLogin = require('../../model/registration/userLogin')

/**
 * validate all fields
 * if all details are recieved then
 * Check wether he has a login, if yes , give err msg
 * check if user previously registered
 * if not, generate new email OTP, verify email
 * save all details
 */

module.exports = (req, res) => {
    console.log('BODY CONTENT ##########', req.body)
        // if(! req.body.firstName)
    requiredField = [
        'firstName',
        'lastName',
        'dob',
        'email',
        'phone'
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
            msg: 'Fill all the details'
        })
    } else {
        dbLogin.findOne({ $or: [{ email: req.body.email }, { phone: req.body.phone }] }, (err, lData) => {
            if (err) {
                res.json({
                    success: false,
                    msg: "Error in processing"
                })
            } else if (!lData || lData == null) {
                dbRegistration.findOne({ $or: [{ email: req.body.email }, { phone: req.body.phone }] }, (err, rData) => {
                    if (err) {
                        console.log(new Date(), __filename, 'err')
                    }
                })
            } else {
                res.json({
                    success: false,
                    msg: 'User have already registered.'
                })
            }
        })
    }
}