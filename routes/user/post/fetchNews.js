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
             
         }
     })
 }