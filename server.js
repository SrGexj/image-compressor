console.clear()

const express = require('express')
const http = require('http')
const sharp = require('sharp')
const cors = require('cors')
const router = require('./routes')
const dotenv = require('dotenv')
const { upload } = require('./middleware/upload')
dotenv.config()


const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false}))
app.use('/uploads', express.static('uploads'))
app.use(router)

const server = http.createServer(app);

server.listen(3000, () => {
    // if (!db) {
    //     return console.log('Error connecting to the database')
    // }
    console.log('Server is running on port 3000')
})