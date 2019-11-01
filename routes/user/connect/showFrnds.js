const dbProfile = require('../../../model/registration/profile')
const dbApproveFR = require('../../../model/connect/approveFR')

module.exports = (req, res) => {
    try {
        dbProfile.findOne({ DID: req.decoded.DID }, (err, profileData) => {
            if (err) {
                res.json({
                    success: false,
                    mgs: 'Somethng went wrong.'
                })
            } else {
                if (!profileData || profileData == null) {
                    res.json({
                        success: false,
                        msg: 'No profile found !'
                    })
                } else {
                    dbApproveFR.find({ $and: [{ 'to.DID': profileData.DID }, { approveRequest: 'yes' }] }, (err, approveData) => {
                        if (err) {
                            res.json({
                                success: false,
                                msg: 'Something went wrong'
                            })
                        } else {
                            const frnds = approveData.map(userName => userName.from.userName)
                            console.log('approve data =-=-=-=-=-=-=-=-=-=-=-=-=-=-=->', frnds)
                            res.json({
                                success: true,
                                frnds: frnds
                            })
                        }
                    })
                }
            }
        })
    } catch (err) {
        console.log(new Date().toLocaleString, __filename, "we got ERROR :::>", err)
    }

}