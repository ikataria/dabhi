const dbRegistration = require('../../model/registration/register')
const ejs = require('ejs')
const mailer = require('../common/nodemailer')
const email = require('../common/email_templates/emailData')
module.exports = (req,res) => {
    console.log('-------req.body===============>',req.body)
    if(!req.body.email || req.body.email ==  null){
        res.json({
            success :false,
            msg : 'Please provide Email.'
        })
    }else{
        
        dbRegistration.findOne({email : req.body.email},(err,regisData) => {
            if(err){
                res.json({
                    success : false,
                    msg : 'Please provide the registered email'
                })
            }else if(!regisData || regisData == null){
                res.json({
                    success : false,
                    msg : `User with this email doesn't exist`
                })
            }else{
                console.log('******regis data*********************************>',regisData)
                let emailObj = email.forgotPassword(req.decoded.userName, regisData.password )
                ejs.renderFile(__dirname + '/../common/email_templates/basic.ejs', emailObj, function(err, str){
                    console.log('=-=-=-=-render file=-=-=-',str)
                    if(err){
                        console.log('-------here----error---',err)
                        res.json({
                            success : false,
                            msg : 'Something went wrong'
                        })
                    }else{ 
                        let subject = `Your Password for Dabhi social network`
                        mailer.sendMail(req.body.email,subject,str).then(mailerData => {
                            console.log('++++++mailer data ++++++++++++',mailerData)
                            res.json({
                                success : true,
                                msg : `Your password for Dabhi is ${mailerData}`
                            })
                        }).catch(err => {
                            res.json({
                                success: false,
                                error : err,
                                msg: "catch err,Go fuck yourself ."
                            })
                        })
                    }
                });
            }
        })
    }
}