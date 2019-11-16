const multer = require('multer')
const path = require('path')


module.exports = (req, res) => {

    let storage = multer.diskStorage({
        destination(req, file, cb) {
            cb(null, './routes/user/uploads/')
        },
        filename(req, file, cb) {
            cb(null, file.fieldname + '-' + Date.now() + file.originalname)
        }
    })

    // function checkFile(file, cb) {
    //     const filetypes = ['image/png', 'image/jpg', 'image/jpeg', 'image/gif']
    //     const check = filetypes.forEach(e => file.mimetype = e)
    //     if (check) {
    //         cb(null, true)
    //     } else {
    //         cb('Error: Images Only!')
    //     }
    // }
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

    upload(req, res, (err) => {
        console.log('=-==-=-=-=-=-=-=-=-=-=-=->', req.file)
        if (err) {
            console.log('err >>>>> maximum file size 5mb ', err)
            res.json({
                success: false,
                msg: err
            });
        } else {
            if (req.file == undefined) {
                res.json({
                    msg: 'Error: No File Selected!'
                });
            } else {
                res.json({
                    msg: 'File Uploaded!',
                    file: `uploads/${req.file.filename}`
                });
            }
        }
    });




}