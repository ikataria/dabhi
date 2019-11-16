// const dbUserlogin = require('../../../model/registration/profile')
const dbPost = require('../../../model/post/post')
const moment = require('moment')
const multer = require('multer')

const generatePostID = function() {
    return new Promise((resolve, reject) => {
        dbPost.count({}, (err, count) => {
            if (err) {
                reject({
                    success: false,
                    msg: `Can't generate PostId`
                })
            } else {
                let date = moment().format('DDMMYYYY')
                let final = count > 9 ? '' + count : '0' + count
                resolve('PID' + date + final)
            }
        })
    })
}



module.exports = (req, res) => {

    // Setting Multer Storage
    let storage = multer.diskStorage({
        destination(req, file, cb) {
            cb(null, './routes/user/uploads/')
        },
        filename(req, file, cb) {
            cb(null, file.fieldname + '-' + Date.now() + file.originalname)
        }
    })

    // Initializing Upload
    var upload = multer({
        storage: storage,
        limits: { fileSize: 1024 * 1024 * 5 },
        fileFilter(req, file, cb) {
            const filetypes = ['image/png', 'image/jpg', 'image/jpeg', 'image/gif']
            if (filetypes.includes(file.mimetype)) {
                return cb(null, true)
            } else {
                console.log('%%%%%%%%%%format not supported %%%%%%%%', new Error())
                return cb('Error: Images Only!')
            }
        }
    }).single('myImage')

    // Calling Upload Function
    upload(req, res, err => {
        if (err) {
            console.log('err >>>>> maximum file size 5mb ', err)
            res.json({
                success: false,
                msg: err
            });
        } else {
            if (!req.body.story || req.body.story == null || req.file == undefined) {
                res.json({
                    success: false,
                    msg: 'No Story Today ?'
                })
            } else {
                generatePostID().then(PID => {
                    new dbPost({
                        DID: req.decoded.DID,
                        fullName: req.decoded.fullName,
                        postID: PID,
                        story: req.body.story,
                        date: new Date().toLocaleString(),
                        status: 0,
                        uploadPost: req.file.path
                    }).save((err, savedPost) => {
                        console.log('Story >>>>>>>>>>..', savedPost)
                        if (err) {
                            res.json({
                                success: false,
                                msg: 'Something went wrong'
                            })
                        } else {
                            res.json({
                                success: true,
                                data: savedPost
                            })
                        }
                    })
                })

            }
        }
    })


}