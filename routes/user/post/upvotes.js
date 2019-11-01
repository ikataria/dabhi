const dbPost = require("../../../model/post/post");
const getPost = require('./getPostFunction')


/**
 * User will see the post (getPost API will be used)
 * On a specific post he/she can like & comment (we will relate the like & Post through 'postID')
 */


const findupvotecount = () => {
    return new Promise((resolve, reject) => {
        dbPost.count({ postID: req.params.postID }, (err, count) => {
            if (err) {
                reject({
                    success: false,
                    mgs: 'Something went wrong while counting'
                })
            } else {
                newCount = count++
                    let final = newCount > 9 ? "" + newCount : "0" + newCount
                console.log('count for upvotes -=--=-=-=-=-=-=-=-=-=-=-=-=>>', final)
                resolve(final)
            }
        })
    })
}

module.exports = (req, res) => {
    getPost(req.decoded.userName).then(data => {
        /**
         * make logic count upvote
         *  
         */
        const p = data.post.map(a => a.postID)
        console.log('map data $#$#$#$#$#$#$#$#$#$#$#$>', p) // output : - [ 'PID1610201900','PID1610201901','PID1810201902' ]

        findupvotecount().then(count => {
            if (p.includes(req.params.postID)) {

                // let update = {
                //     'upvoteCount.count' : count,
                //     'upvoteCount.byWhom' : g,
                // }

                let update = { $set: { 'upvoteCount.count': count }, $push: { 'upvoteCount.byWhom': { DID: req.decoded.DID, fullName: req.decoded.fullName, at: new Date } } }
                dbPost.findOneAndUpdate({ postID: req.params.postID }, {}, (err, data) => {
                    if (err) {
                        console.log(new Date().toLocaleString, __filename, "we got ERROR :::>", err)
                        res.json({
                            success: false,
                            msg: 'Something went wrong'
                        })
                    } else {
                        res.json({
                            success: true,
                            msg: 'Liked'
                        })
                    }
                })
            } else {
                console.log('post not found in array of getPost function')
            }
        })


        /******************************************************************************/
        p.forEach(ele => {
                if (req.params.postID == ele) {
                    console.log('Post found ---->>>', ele)

                    dbPost.findOneAndUpdate({ $and: [{ postID: p }, { postID: req.params.postID }] }, (err, data) => {
                        if (err) {
                            console.log(new Date().toLocaleString, __filename, "we got ERROR :::>", err)
                        } else {
                            console.log('post data --------------------->', data)

                            console.log('length--------->', data.upvoteCount.length)

                            // function upvote() {
                            //     data.upvoteCount.length({}, (err, count) => {
                            //         if (err) {
                            //             console.log(new Date().toLocaleString, __filename, "we got ERROR :::>", err)
                            //         } else {
                            //             let newCount = count++
                            //                 return newCount > 9 ? '' + newCount : '0' + newCount
                            //         }
                            //     })
                            // }
                            // console.log('count --------->>', upvote())

                            // let update = { $set: { 'upvoteCount.count': upvote() }, $push: { 'upvoteCount.byWhom': { DID: } } }
                        }
                    })
                }
            })
            /***************/
    })
}

/********************************** Gaurav Code ***********************************/
// module.exports = async(req, res) => {
//     const { postID, DID } = req.body;

//     if (!postID && !DID) {
//         //   values Missing;
//     } else {
//         const post = await dbPost.findOne({ postId });

//         if (post) {
//             const { byWhom } = post;

//             if (byWhom && !byWhom.includes(user => user.DID == DID)) {

//                 // Update post by one lke
//             } else {
//                 // Post already liked by the user
//             }
//         } else {
//             // post not found!!
//         }
//     }
// };