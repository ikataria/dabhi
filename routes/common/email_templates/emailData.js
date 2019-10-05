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