const mongoose = require('mongoose')

const imageSchema = new mongoose.Schema({
    imageName: String,
    date: {
        type: Date,
        default: Date.now
    },
    uploaderDID: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('uploadImage', imageSchema)