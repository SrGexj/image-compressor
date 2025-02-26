const express = require('express')
const router = express.Router()
const { upload } = require('./middleware/upload')   
const { compressImage } = require('./controllers/upload_controller')

router.get('/', (req, res) => {
    res.send('Server running')
})

router.post('/upload', upload.array('images'), compressImage)

module.exports = router