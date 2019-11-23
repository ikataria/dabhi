const dbRegistration = require('../../model/registration/register')
const dbUserLogin = require('../../model/registration/userLogin')


module.exports = (req, res) => {
    // console.log('>>>>>>>>>>>>>>> Decoded data >>>>>>>>>>>>>>', req.decoded)
    if (!req.body.password || req.body.password == null || !req.body.newPassword || req.body.newPassword == null) {
        res.json({
            success: false,
            msg: 'Please fill the password field'
        })
    } else {
        //  Mongoose Query 
        let query = {
            $or: [
                { userName: req.decoded.userName },
                { email: req.decoded.email },
                { phone: req.decoded.phone }
            ]
        }

        dbUserLogin.findOne(query,
                (err, loginData) => {
                    if (err) {
                        res.json({
                            success: false,
                            msg: 'Something went wrong'
                        })
                    } else {
                        if (req.body.password != loginData.password) {
                            res.json({
                                success : false,
                                msg : 'Incorrect Password'
                            })
                        } else if(req.body.password === req.body.newPassword){
                            res.json({
                                success : false,
                                msg : `New & Old Password can't be same`
                            })
                        }else{
                            // Update 
                            let update = { password : req.body.newPassword}

                            dbRegistration.findOneAndUpdate(query,update , (err, rData) => {
                                if (err) {
                                    res.json({
                                        success: false,
                                        msg: 'Something went wrong'
                                    })
                                } else{
                                    dbUserLogin.findOneAndUpdate(query,{ $set : {password : req.body.newPassword, changePassword : true}} , (err, uData) => {
                                        if (err) {
                                            res.json({
                                                success: false,
                                                msg: 'Something went wrong'
                                            })
                                        } else{
                                            res.json({
                                                success : true,
                                                msg : 'Password updated successfully'
                                            })
                                        }
                                    })
                                }
                            })
                        }
                    }
                }) 
    }
}