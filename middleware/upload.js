const multer = require('multer');
const path = require('path');
const fs = require('fs');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        if (!fs.existsSync('./uploads')) {
            fs.mkdirSync('./uploads')
        }
        cb(null, './uploads')
    },
    filename: function (req, file, cb) {
        cb(null, // generate a unique name for the file using Date.now()
            file.originalname
        )}
})

const upload = multer({
    storage
})

module.exports = {
    upload
}