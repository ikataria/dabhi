const dbPost = require('../../../model/post/post')
const dbProfile = require('../../../model/registration/profile')
const dbapproveFR = require('../../../model/connect/approveFR')

/**
 * Check if two are friends 
 * if yes, then show one's post to another
 * else not
 */

module.exports = (req, res) => {
    dbapproveFR.find({ $and: [{ 'to.userName': req.decoded.userName }, { approveRequest: 'yes' }] }, (err, data) => {
        if (err) {
            console.log(new Date().toLocaleString, __filename, "we got ERROR :::>", err)
        } else {
            console.log('data :::::::+===::::+++++:+:+:+:+:+:', data)
        }
    })
}