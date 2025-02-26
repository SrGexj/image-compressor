const sharp = require('sharp')
const path = require('path')
const fs = require('fs')

const compressImage = async (req, res) => {
    try {
        const images = req.files // Ahora `req.files` es un array
        const { resize, format, quality, lossless} = req.body

        if (!images || images.length === 0) {
            return res.status(400).json({ message: 'No images uploaded' })
        }

        const compressedImages = []

        const name = path.parse(images[0].filename).name
        const sinResolucion = name.replace(/[\s-]*\d+x\d+\s*$/, '');
        const nombreFinal = sinResolucion.replace(/\s+/g, '-');

        // Procesar todas las imágenes
        for (const image of images) {
            const compressedImagePath = `./uploads/compressed-${nombreFinal}-${resize ? resize : '1500'}.${format}`

            await sharp(image.path)
                .resize({ width: parseInt(resize) ? parseInt(resize) : 1500 })
                .toFormat(format ? format : 'webp')
                .webp({ quality: parseInt(quality ? quality : 80 ), lossless: lossless === 'true' ? true : false })
                .toFile(compressedImagePath)

            compressedImages.push(compressedImagePath)
        }

        res.status(200).json({ message: 'Images compressed', files: compressedImages })
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: 'Error compressing images' })
    }
}

module.exports = { compressImage }
