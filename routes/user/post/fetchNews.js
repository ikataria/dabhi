const dbFrndRqstList = require('../../../model/connect/frndRqstList')
const dbPost = require('../../../model/post/post')

/**
 * 1st search model & see if one is our friend or not
 * then using frndID search his/her post
 */

 //query = {reqstApproved : 'yes' && 'to.DID' : req.decoded.DID}

 const errorHandler = (err,res) => {
     res.json({
         success : false,
         msg : 'Something went wrong',
         error : err.message
     })
 }
 module.exports = (req,res) => {
     dbFrndRqstList.find({$and : [{rqstApproved : 'yes'},{'to.DID' : req.decoded.DID}]},(err,rqstData) => {
         if(err){
             errorHandler(err,res)
         }else{
            //  console.log('-=-=-=-=-=-=-=->',rqstData,'<-=-=-=-=-=-=-=-=')
            const DID = rqstData.map(a => a.from.DID)
            console.log('-=-=-=-=-=-=-=-=-=-=-=-=-=->>>>>>>>',DID)
            dbPost.find({DID : DID}).sort({createdAt : 'Descending'}).exec((err,post) => {
                if(err){ errorHandler(err,res)}
                else{
                    // console.log('post data-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=->',post.upvoteCount)
                    const data = post.map( (b) => {
                        return{
                            'like' : b.upvoteCount,
                            'owner' : b.fullName,
                            'story' : b.story,
                            'date' : b.createdAt,
                            comment : b.comment,
                            uploadedPost : b.uploadPost
                        }
                    })
                    console.log(' post data-=-=-=-=-=-=-=-=-=-=-=-=-=->>>>//////',data)
                    res.json({
                        success : true,
                        // msg : 'Something went wrong',
                        feed : data
                    })
                }
            })
         }
     })
 }