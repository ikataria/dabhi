const dbProfile = require("../../../model/registration/profile")

module.exports = (req, res) => {
    if (!req.body.userName || req.body.userName == null) {
        res.json({
            success: false,
            msg: 'Please provide UserName'
        })
    } else {
        dbProfile.findOne({})
    }
}