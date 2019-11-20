const dbRegistration = require('../../model/registration/register')
const dbUserLogin = require('../../model/registration/userLogin')


module.exports = (req, res) => {
    // console.log('>>>>>>>>>>>>>>> Decoded data >>>>>>>>>>>>>>', req.decoded)
    if (!req.body.password) {
        res.json({
            success: false,
            msg: 'Please fill the password field'
        })
    } else {
        // first enter old password
        dbUserLogin.findOne({
                    $or: [
                        { userName: req.decoded.userName },
                        { email: req.decoded.email },
                        { phone: req.decoded.phone }
                    ]
                },
                (err, loginData) => {
                    if (err) {
                        res.json({
                            success: false,
                            msg: 'Something went wrong'
                        })
                    } else {
                        if (req.body.password == loginData.password) {

                        } else {
                            res.json
                        }
                    }
                })
            // if(req.body.password == )
            // if password matches old password, allow user to chnage password else return error 
    }
}