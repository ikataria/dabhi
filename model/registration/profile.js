var mongoose = require('mongoose')
var Schema = mongoose.Schema;

/**
 * -2: blocked
 * -1: deleted
 *  1: Verified and profile created
 */


var profile = new Schema({
    DID: {
        type: String,
        unique: true
    },
    userName: {
        type: String,
        unique: true,
        required: true
    },
    firstName: String,
    lastName: String,
    fullName: String,
    email: String,
    address: [{
        line1: String,
        line2: String,
        city: String,
        state: String,
        pincode: Number,
        country: String
    }],
    phoneCode: String,
    blockReason: String,
    phone: Number,
    user_type: {
        type: String,
        enum: ['main_user', 'sub_user']
    },
    active: Boolean,
    createdAt: Date,
    status: Number
})

module.exports = mongoose.model('profile', profile)