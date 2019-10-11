const nodemailer = require('nodemailer')

exports.sendMail = (email, subject, msg) => {
    return new Promise(function(resolve, reject) {
        const myEmail = process.env.EMAIL
        const myPassword = process.env.PASSWORD
            // console.log('environment variable email >>>>>>>>>>>>>', myEmail)
            // console.log('environment variable password >>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<', myPassword)

        // Create transporter
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: myEmail, //mohitkataria330@gmail.com
                pass: myPassword
            }
        });

        // Prepare Your Message
        let message = {
            from: 'mohitkataria330@gmail.com',
            to: email,
            subject: subject,
            html: msg
        };

        // Use transporter sendMail method
        transporter.sendMail(message, function(err, data) {
            if (err) {
                console.log('error from nodemailer')
                reject(err);
            } else {
                console.log('nodemailer data successfully send')
                resolve(data)
            }
        });
    })
}