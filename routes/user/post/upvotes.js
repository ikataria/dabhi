const dbPost = require("../../../model/post/post");
const getPost = require('./getPostFunction')
    /**
     * User will see the post (getPost API will be used)
     * On a specific post he/she can like & comment (we will relate the like & Post through 'postID')
     */

module.exports = (req, res) => {
    getPost(req.decoded.userName).then(data => {
        // console.log('upvotes ---------->>>>>>>>>>>>>', data.post)
        const p = data.post.map(({ postID }) => ({
            postID
        }))
        console.log('map data $#$#$#$#$#$#$#$#$#$#$#$>', p)
        p.forEach(element => {
            const list = element.postID
            console.log('ele data ==-=-=-=-=-=-=-=-=-=-=->>', list)


            dbPost.findOne({ postId: { $in: [list] } }, (err, data) => {
                if (err) {
                    console.log(new Date().toLocaleString, __filename, "we got ERROR :::>", err)
                } else {
                    console.log('post data --------------------->', data)
                }
            })
        });

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