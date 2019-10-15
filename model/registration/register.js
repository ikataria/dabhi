const mongoose = require('mongoose')

/**
 * Status
 * -1:  Disabled for using services
 * 0 :  Just registered
 * 1 :  email verified
 * 2 :  Profile created
 */

const registerSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    userName: {
        type: String,
        required: true,
        unique: true
    },
    dob: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: Number,
        required: true,
        unique: true
    },
    status: Number,
    password: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
    emailVerify: {
        otp: Number,
        verified: Boolean,
        verifiedAt: Date
    }
})

module.exports = mongoose.model('register', registerSchema)