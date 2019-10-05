const nodemailer = require('nodemailer')

exports.sendMail = (email, subject, msg) => {
    return new Promise(function(resolve, reject) {
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'mohitkataria330@gmail.com',
                pass: 'hokkapani'
            }
        });

        let message = {
            from: 'mohitkataria330@gmail.com',
            to: email,
            subject: subject,
            html: msg
        };

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