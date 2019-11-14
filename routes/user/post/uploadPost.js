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

    var upload = multer({
            storage: storage
        }).single('myImage')
        // const upload = multer({ dest: './routes/user/uploads/' }).single('myImage')

    upload(req, res, (err) => {
        console.log('=-==-=-=-=-=-=-=-=-=-=-=->', req.file)
        if (err) {
            console.log('err >>>>>', err)
            res.json({
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