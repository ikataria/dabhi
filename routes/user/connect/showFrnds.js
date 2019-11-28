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
                    /** use $in for DID  */
                    const query = { $and: [{ approveRequest: 'yes' }, { $or: [{ 'to.DID': profileData.DID }, { 'from.DID': profileData.DID }] }] }
                    dbApproveFR.find(query, (err, approveData) => {
                        console.log('eror=-=-=-=-=-=-=-=-=-=-=-=-=-=^^^^^^^^^^^^^^^^^^^^^^^>', err)
                        if (err) {
                            res.json({
                                success: false,
                                msg: 'Something went wrong'
                            })
                        } else {
                            console.log('approval data=-=-=-=-=-=-=-=-=-=-=-=-=-=^^^^^^^^^^^^^^^^^^^^^^^>', approveData)
                            const frnds = approveData.map(userName => {
                                return {
                                    from: userName.from.userName,
                                    to: userName.to.userName
                                }
                            })
                            const a = frnds.map(ele => ele.from)
                            const b = frnds.map(abc => abc.to)
                            const connected = a.concat(b)
                                // console.log('%$%$%$%$%$%$%$%$%$%$%$>>', index)

                            const unique = [...new Set(connected)]
                            const index = unique.indexOf(req.decoded.userName)
                            if (index != -1) {
                                unique.splice(index, 1)
                            }
                            console.log('decoded data =-=-=-=-=-=-=-=-=-=-=-=-=-=-=->', unique)
                                // console.log('approve data =-=-=-=-=-=-=-=-=-=-=-=-=-=-=->', unique)
                            res.json({
                                success: true,
                                frnds: unique
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