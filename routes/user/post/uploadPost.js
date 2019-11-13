const multer = require('multer')

module.exports = (req, res) => {
    let storage = multer.diskStorage({
        destination: function(req, file, cb) {
            cb(null, __dirname + `/../uploads/`)
        },
        filename: function(req, file, cb) {
            cb(null, file.fieldname + '-' + Date.now())
        }
    })

    var upload = multer({ storage: storage }).single('myImage')
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