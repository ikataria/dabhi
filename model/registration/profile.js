// var mongoose = require('mongoose')
// var Schema = mongoose.Schema;

// /**
//  * 2: Verified and profile created
//  * 3: Warehouse added
//  * 4: Accounting details
//  * -1: blocked
//  * -10: deleted
//  */


// var profile = new Schema({
//     SGID: {
//         type: String,
//         unique: true
//     },
//     userName: String,
//     firstName: String,
//     lastName: String,
//     email: String,
//     companyEmail: String,
//     logo: String,
//     companyWebsite: String,
//     companyName: String,
//     companyAddress: [{
//         line1: String,
//         line2: String,
//         city: String,
//         state: String,
//         pincode: Number,
//         country: String
//     }],
//     phoneCode: String,
//     blockReason: String,
//     activateReason: String,
//     activateReason: String,
//     phone: Number,
//     user_type: {
//         type: String,
//         enum: ['main_user', 'sub_user']
//     },
//     weightAllow: {},
//     odLimit: Number,
//     platform: Boolean,
//     apiUser: Boolean,
//     defaultWeightResolveTime: { // no. of days
//         type: Number,
//         default: 10
//     },
//     platformSGID: mongoose.Schema.Types.ObjectId,
//     mainUserSGID: mongoose.Schema.Types.ObjectId,
//     subscription: String,
//     balance: Number,
//     SGlogo: Boolean,
//     brandName: String,
//     active: Boolean,
//     createdAt: Date,
//     labelType: {
//         type: String,
//         default: 'a4',
//         enum: ['a4', 'thermal']
//     },
//     updatedAt: [Date],
//     discount: Number,
//     kyc: {
//         panNo: String,
//         panPhoto: String,
//         gstin: String,
//         cin: String
//     },
//     reverseCharges: Number,
//     bulk: String, //open or close
//     bulkCount: Number,
//     lastBatchId: String,
//     bulkProcess: String, //pending or closed
//     bulkData: {
//         success: Boolean,
//         msg: String,
//         ordersNotBooked: [],
//         orderPickupNotGenerated: []
//     },
//     accountingDetails: {
//         acNo: String,
//         bank: String,
//         acType: String,
//         IFSC: String,
//         name: String,
//         signature: String,
//         cancelledCheque: String
//     },
//     remmitCycle: Number, //days
//     remmitDay: String,
//     customCourier: [{
//         courierId: String,
//         courierPartner: String,
//         status: Boolean,
//         credentials: {
//             type: Object
//         }
//     }],
//     courierCompanies: {
//         SGecom: Boolean
//     },
//     emailEvents: [{
//         status: Number,
//         emails: [String],
//         subject: String,
//         message: String,
//         eventStatus: {
//             type: Number,
//             default: 0
//         }
//     }],
//     status: Number
// })

// module.exports = mongoose.model('profile', profile)