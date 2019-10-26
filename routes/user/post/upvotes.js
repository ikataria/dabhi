const dbPost = require("../../../model/post/post");
const getPost = require('./getPostFunction')


/**
 * User will see the post (getPost API will be used)
 * On a specific post he/she can like & comment (we will relate the like & Post through 'postID')
 */

module.exports = (req, res) => {
    getPost(req.decoded.userName).then(data => {

        const p = data.post.map(({ postID }) => postID)
        console.log('map data $#$#$#$#$#$#$#$#$#$#$#$>', p)

        if (!req.params.postID) {
            res.status(400).json({
                success: false,
                msg: 'No PostID found'
            })
        } else {
            p.forEach(ele => {
                if (req.params.postID == ele) {
                    console.log('Post found ---->>>', ele)

                    dbPost.findOne({ postID: ele }, (err, data) => {
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
            });

        }

    })
}

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