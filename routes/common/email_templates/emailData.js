const contact = `If you have any questions, just write to us at <a href="17kataria@gmail.com" style="color: #4dd0e1;">17kataria@gmail.com</a> — we're always happy to help out.`;
const sign = `Regards,<br>Team Dabhi`;


exports.verifyEmail = (name, otp) => {
    return {
        heading: `Verify Email!`,
        greet: `Hi ${name},`,
        // preButton: `We're excited to have you get started. First, you need to confirm your account. Just press the button below.`,
        // postButton: `If that doesn't work, copy and paste the following link in your browser:`,
        // button: `Confirm Email`,
        body: `We're excited to have you get started.<br><br>The OTP for email verification is ${otp}.<br><br> Please paste the same otp in the verification form.`,
        // link: link,
        contact: contact,
        sign: sign
    };
};

exports.welcomeEmail = (name, link) => {
    return {
        heading: `Welcome!`,
        greet: `Hi ${name},`,
        body: `Thank you for choosing Dabhi as your social partner.
        Your account is all set and is ready for use. Please use ${link} to login with the registered credentials.
        We are always there to help you.`,
        contact: contact,
        sign: `Happy Dabhi!<br><br>${sign}`
    };
};

exports.forgotPassword = (name, password) => {
    return {
        heading: `Password`,
        greet: `Hi ${name},`,
        // preButton: `We're excited to have you get started. First, you need to confirm your account. Just press the button below.`,
        // postButton: `If that doesn't work, copy and paste the following link in your browser:`,
        // button: `Confirm Email`,
        body: `Here is your Password.<br><br>The password for your email is ${password}.<br><br> Please paste the same password in the password field.`,
        // link: link,
        contact: contact,
        sign: sign
    };
};