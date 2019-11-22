const dbRegistration = require('../../model/registration/register')
const ejs = require('ejs')
const mailer = require('../common/nodemailer')
const email = require('../common/email_templates/emailData')
module.exports = (req,res) => {
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
                ejs.renderFile(__filename, emailObj, function(err, str){
                    if(err){
                        res.json({
                            success : false,
                            msg : 'Something went wrong'
                        })
                    }else{ 
                        let subject = `Your Password for Dabhi social network`
                        mailer.sendMail(req.body.email,subject,str)
                    }
                });
            }
        })
    }
}