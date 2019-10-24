const dbPost = require('../../../model/post/post')
const dbapproveFR = require('../../../model/connect/approveFR')
    // const dbProfile = require('../../../model/registration/profile')

/**
 * Check if two are friends 
 * if yes, then show one's post to another
 * else not
 */

// module.exports = (req, res) => {
//     dbapproveFR.find({ $and: [{ 'to.userName': req.decoded.userName }, { approveRequest: 'yes' }] }, (err, data) => {
//         if (err) {
//             console.log(new Date().toLocaleString, __filename, "we got ERROR :::>", err)
//             res.json({
//                 success: false,
//                 msg: 'Something went wrong !'
//             })
//         } else {
//             if (!data || data == null) {
//                 res.json({
//                     success: false,
//                     msg: 'No post to show'
//                 })
//             } else {
//                 /******************* searching DID from dbApproveFR  *******************************/
//                 let arr = []
//                 data.forEach(ele => arr.push(ele.from.DID))

//                 /*********************** from array of DID we will search the POST  ***************/
//                 dbPost.find({ DID: arr }, (err, postData) => {
//                     if (err) {
//                         console.log(new Date().toLocaleString, __filename, "we got ERROR :::>", err)
//                         res.json({
//                             success: false,
//                             msg: 'Something went wrong !'
//                         })
//                     } else {
//                         console.log('postData ^***^*^*^*^*^*^*^*^*^*^*>>', postData)
//                             // let obj = postData.map(a => {
//                             //     return ({
//                             //         story: a.story,
//                             //         by: a.fullName
//                             //     })
//                             // })
//                             // console.log('objdata ####################>>', obj)
//                         res.json({
//                             success: true,
//                             post: postData,
//                         })
//                     }
//                 })
//             }
//         }
//     })
// }

module.exports = (userName) => {
    // console.log('body data &^&^&^&^&^&^&^&^&^&^&^&^&^&^&$$$$$$$>>')
    return new Promise((resolve, reject) => {
        try {
            dbapproveFR.find({ $and: [{ 'to.userName': userName }, { approveRequest: 'yes' }] }, (err, data) => {
                if (err) {
                    console.log(new Date().toLocaleString, __filename, "we got ERROR :::>", err)
                    reject({
                        success: false,
                        msg: 'Something went wrong !'
                    })
                } else {
                    if (!data || data == null) {
                        reject({
                            success: false,
                            msg: 'No post to show'
                        })
                    } else {
                        /******************* searching DID from dbApproveFR  *******************************/
                        let arr = []
                        data.forEach(ele => arr.push(ele.from.DID))

                        /*********************** from array of DID we will search the POST  ***************/
                        dbPost.find({ DID: arr }, (err, postData) => {
                            if (err) {
                                console.log(new Date().toLocaleString, __filename, "we got ERROR :::>", err)
                                reject({
                                    success: false,
                                    msg: 'Something went wrong !'
                                })
                            } else {
                                // console.log('postData ^***^*^*^*^*^*^*^*^*^*^*>>', postData)
                                // let obj = postData.map(a => {
                                //     return ({
                                //         story: a.story,
                                //         by: a.fullName
                                //     })
                                // })
                                // console.log('objdata ####################>>', obj)
                                resolve({
                                    success: true,
                                    post: postData,
                                })
                            }
                        })
                    }
                }
            })
        } catch (err) {
            reject(err)
        }
    })

}