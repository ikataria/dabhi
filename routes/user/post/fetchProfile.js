const dbFrndRqstList = require('../../../model/connect/frndRqstList')
const dbPost = require('../../../model/post/post')

/**
 * in this API , we will fetch User data id through which
 * we will find & show his/her :-  friends ,  post
 */

const errorHandler = (err, res) => {
    res.json({
        success: false,
        msg: 'Something went wrong',
        error: err.message
    })
}
module.exports = (req, res) => {
    dbPost.find({ DID: req.params.DID }).sort({ createdAt: 'Descending' }).exec((err, post) => {
        if (err) { errorHandler(err, res) } else {
            const data = post.map((b) => {
                    return {
                        'like': b.upvoteCount,
                        'owner': b.fullName,
                        'story': b.story,
                        'date': b.createdAt,
                        comment: b.comment,
                        uploadedPost: b.uploadPost
                    }
                })
                // console.log('post data-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=->',data)
            const query = { $and: [{ rqstApproved: 'yes' }, { $or: [{ 'to.DID': req.params.DID }, { 'from.DID': req.params.DID }] }] }
            dbFrndRqstList.find(query, (err, rqstData) => {
                if (err) {
                    errorHandler(err, res)
                } else {
                    // console.log('-=-=-=-=-=-=-=->','here','<-=-=-=-=-=-=-=-=')
                    console.log('-request DAta=-=-=%$%$%$%$%$%$%$%$%$%$%$%$%$%-=-=-=-=->', rqstData, '<-=-=-=-=-=-=-=-=')

                    // const did = rqstData.reduce((prev, curr) => {
                    //     let nowData = [curr.from.DID, curr.to.DID];
                    //     return prev.concat(nowData);
                    // }, []);

                    const user = rqstData.reduce((prev, curr) => {
                        let nowData = [curr.from.userName, curr.to.userName];
                        return prev.concat(nowData);
                    }, [])

                    const frnds = [...new Set(user)]
                    const index = frnds.indexOf(req.decoded.userName)
                    if (index > -1) {
                        frnds.splice(index, 1)
                    }
                    console.log('$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%$%>>>', frnds)

                    res.json({
                            success: true,
                            friends: frnds,
                            post: data
                        })
                        // const DID = rqstData.map(a => a.from.DID)
                        // const dID = rqstData.map(a => a.to.DID)


                    // const merge = DID.concat(dID)
                    // const noRepeat = [...new Set(merge)]
                    // const index = noRepeat.indexOf(req.decoded.DID)
                    // if (index != -1) {
                    //     noRepeat.splice(index, 1)
                    // }
                    // console.log('-=-=-$$$$$-----Merge data --=-=-=-=-=-=-=-=-=-=-=->>>>>>>>', index)

                }
            })

        }
    })

}