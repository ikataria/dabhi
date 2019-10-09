var mongoose = require('mongoose')
var Schema = mongoose.Schema;

/**
 * -1: blocked
 * -10: deleted
 * 2: Verified and profile created
 */


var profile = new Schema({
    DID: {
        type: String,
        unique: true
    },
    userName: String,
    firstName: String,
    lastName: String,
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