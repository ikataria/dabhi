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
            res.json({
                success: false,
                msg: 'Something went wrong !'
            })
        } else {
            if (!data || data == null) {
                res.json({
                    success: false,
                    msg: 'No post to show'
                })
            } else {
                let arr = []
                data.forEach((ele, index) => {
                    // console.log('***', index, '-->', ele.from.DID)
                    arr.push(ele.from.DID)
                })
                console.log('data :::::::+===::::+++++:+:+:+:+:+:', arr)
                dbPost.find({ DID: arr }, (err, postData) => {
                    if (err) {
                        console.log(new Date().toLocaleString, __filename, "we got ERROR :::>", err)
                        res.json({
                            success: false,
                            msg: 'Something went wrong !'
                        })
                    } else {
                        let arrStory = []
                        let arrBy = []
                        postData.forEach(a => {
                            console.log('POST %%%%%%%%%%^^^^^^^^^^^^^^^^^^^^', a.story, ', By :-', a.fullName)

                            arrStory.push(a.story)
                            arrBy.push(a.fullName)
                        })
                        res.json({
                            success: true,
                            post: arrStory,
                            by: arrBy
                        })
                    }
                })
            }
        }
    })
}