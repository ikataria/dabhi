const dbPost = require("../../../model/post/post");
const getPost = require('./getPostFunction')

/**
 * User will see the post (getPost API will be used)
 * On a specific post he/she can like & comment (we will relate the like & Post through 'postID')
 */

const findupvotecount = (id) => {
    return new Promise((resolve, reject) => {
        dbPost.findOne({ postID: id }, (err, data) => {
            if (err) {
                reject({
                    success: false,
                    mgs: 'Something went wrong while finding post for counting'
                })
            } else {
                let count = data.upvoteCount.byWhom.length
                console.log('find count-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=>', count)
                let newCount = ++count
                console.log('new count-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=>', newCount)
                let final = newCount > 9 ? '' + newCount : '0' + newCount
                resolve(final)
            }
        })
    })
}



module.exports = (req, res) => {
    getPost(req.decoded.userName).then(data => {

        const p = data.post.map(a => a.postID)
        console.log('map data $#$#$#$#$#$#$#$#$#$#$#$>', p) // output : - [ 'PID1610201900','PID1610201901','PID1810201902' ]

        let pID = req.params.postID
        findupvotecount(pID).then(count => {
            if (p.includes(req.params.postID)) {
                let update = { $set: { 'upvoteCount.count': count }, $push: { 'upvoteCount.byWhom': { DID: req.decoded.DID, fullName: req.decoded.fullName, at: new Date } } }
                dbPost.findOneAndUpdate({ postID: req.params.postID }, update, (err, data) => {
                    if (err) {
                        console.log(new Date().toLocaleString, __filename, "we got ERROR :::>", err)
                        res.json({
                            success: false,
                            msg: 'Something went wrong'
                        })
                    } else if (data.upvote) {

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
        }).catch(err => {
            res.json({
                success: false,
                msg: 'error while counting upvotes'
            })
        })
    }).catch(err => {
        res.json({
            success: AnalyserNode,
            msg: ' Error while searching for post'
        })
    })
}

/********************************** Gaurav Code for upvote***********************************/
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
/*******************************************************************************************************/