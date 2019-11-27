const dbFrndRqstList = require('../../../model/connect/frndRqstList')
const dbPost = require('../../../model/post/post')

/**
 * in this API , we will fetch User data id through which
 * we will find & show his/her :-  friends ,  post
 */

 const errorHandler = (err,res) => {
     res.json({
         success : false,
         msg : 'Something went wrong',
         error : err.message
     })
 }
 module.exports = (req,res) => {
    dbPost.find({DID : req.params.DID}).sort({createdAt : 'Descending'}).exec((err,post) => {
        if(err){ errorHandler(err,res)}
        else{
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
            // console.log('post data-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=->',data)

            dbFrndRqstList.find({$and : [{rqstApproved : 'yes'},{$or :[{'to.DID' : req.params.DID},{'from.DID' : req.params.DID}]}]},(err,rqstData) => {
                if(err){
                    errorHandler(err,res)
                }else{
                    // console.log('-=-=-=-=-=-=-=->','here','<-=-=-=-=-=-=-=-=')
                   console.log('-=-=-=-=-=-=-=->',rqstData,'<-=-=-=-=-=-=-=-=')
                   const DID = rqstData.map(a => a.from.DID)
                   console.log('-=-=-=-=-=-=-=-=-=-=-=-=-=->>>>>>>>',DID)
                   
                }
            })
            
        }
    })
    
 }