const nodemailer = require('nodemailer')


let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'mohitkataria330@gmail.com',
        pass: 'hokkapani'
    }
});

let message = {
    from: 'mohitkataria330@gmail.com',
    to: '17kataria@gmail.com',
    subject: "testing nodemailer",
    // html: msg
    text: 'IT works'
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