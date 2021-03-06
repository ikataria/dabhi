const dbProfile = require('../../../model/registration/profile')

module.exports = (req, res) => {
    dbProfile.find({ status: { $nin: [-1, -2] } }, (err, profileData) => {
        if (err) {
            res.json({
                success: false,
                msg: 'Something went wrong'
            })
        } else if (!profileData || profileData.length == 0) {
            res.status(404).json({
                success: false,
                msg: 'No Friends Found'
            })
        } else {
            let arr = []
            profileData.forEach(ele => {
                userName = ele.userName
                arr.push(userName)
            })

            let index = arr.indexOf(req.decoded.userName)
            if (index > -1) {
                arr.splice(index, 1)
            }
            console.log('profile data XXXXXXXXXXXXXXXXXXXx-->', arr)


            res.json({
                success: true,
                msg: 'All Dabhi',
                count: profileData.length - 1,
                data: arr
            })
        }
    })
}