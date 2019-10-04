const mongoose = require('mongoose')

const loginSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
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
    username: String,
    password: {
        type: String,
        required: true
    },
    token: String,
    lastLogin: [Date],
    changePassword: {
        type: Boolean,
        default: false
    },
    // createdAt: { type: Date }
})

module.exports = mongoose.model('userLogin', loginSchema)