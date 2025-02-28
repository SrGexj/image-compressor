const sharp = require('sharp')
const path = require('path')
const fs = require('fs')

const compressImage = async (req, res) => {
    try {
        const images = req.files 
        let { resize, format, quality, lossless} = req.body

        if (!images || images.length === 0) {
            return res.status(400).json({ message: 'No images uploaded' })
        }

        resize = parseInt(resize) || 1500
        format = format || 'webp'
        quality = parseInt(quality) || 80
        lossless = lossless === 'true'

        const compressedImages = []

        const uploadDir = path.join(__dirname, '../uploads');
        if (!fs.existsSync(uploadDir)) {
          fs.mkdirSync(uploadDir);
        }

        const name = path.parse(images[0].filename).name
        const sinResolucion = name.replace(/[\s-]*\d+x\d+\s*$/, '');
        const nombreFinal = sinResolucion.replace(/\s+/g, '-');

        for (const image of images) {
            // const compressedImagePath = `./uploads/compressed-${nombreFinal}-${resize ? resize : '1500'}.${format}`
            const compressedFileName = `compressed-${nombreFinal}-${resize}.${format}`;
            const compressedFilePath = path.join(uploadDir, compressedFileName);


            await sharp(image.path)
                .resize({ width: resize ? resize : 1500 })
                .toFormat( format ? format : 'webp')
                .webp({ quality: parseInt(quality ? quality : 80 ), lossless: lossless === 'true' ? true : false })
                .toFile(compressedFilePath)

                const publicUrl = `${req.protocol}://${req.get('host')}/uploads/${compressedFileName}`;
                compressedImages.push(publicUrl);                
        }


        res.status(200).json({ message: 'Images compressed', files: compressedImages })
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: 'Error compressing images' })
    }
}

module.exports = { compressImage }
