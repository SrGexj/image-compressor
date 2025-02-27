![alt text](repository-open-graph-template.png)

# Image Compressor API

Image Compressor API es un servicio online gratuito que permite comprimir imágenes de forma sencilla. Utiliza Node.js, Express, Multer y Sharp para procesar imágenes subidas por el usuario, ofreciendo opciones configurables como redimensionamiento, selección de formato (por defecto **webp**), ajuste de calidad y compresión sin pérdida.

## Características

- **Carga de Imágenes**: Soporta la subida de una o múltiples imágenes a través de un formulario web.
- **Redimensionamiento**: Ajusta el ancho de la imagen (por defecto 1500px).
- **Formatos de Salida**: Permite elegir entre **webp**, **jpeg** y **png**.
- **Control de Calidad**: Configurable mediante un control de rango (0-100, valor predeterminado 80).
- **Compresión sin Pérdida**: Opción para activar compresión lossless.

## Cómo Funciona

1. **Subida de Archivos**: El usuario sube imágenes mediante el formulario.
2. **Procesamiento**: El backend usa Multer para recibir las imágenes y Sharp para redimensionarlas, comprimirlas y convertir el formato según los parámetros enviados.
3. **Respuesta**: Se devuelve una respuesta JSON con las rutas de las imágenes comprimidas, las cuales se previsualizan y pueden descargarse desde la interfaz.

## Instalación (para ejecución local)

Si deseas ejecutar el proyecto en tu entorno local:

1. **Clonar el repositorio:**
```bash
git clone https://github.com/SrGexj/image-compressor.git
```

2. **Entrar en el directorio del proyecto:**
```bash
cd image-compressor-api
```

3. **Instalar las dependencias:**
```bash
npm install
```

4. **Inicializar el servidor:**
```bash
node server.js
```

o también puedes usar nodemon para desarrollo:
```bash
nodemon server.js
```

El servicio se ejecutará en http://localhost:3000.

## Uso

- Subir las imágenes.
- Configurar el ancho (resize), el formato de salida, la calidad y si se desea compresión lossless.
- Visualizar las imágenes comprimidas y descargarlas mediante los botones correspondientes.

## API Endpoint

**POST /upload**

**Parámetros (form-data):**

- `images` (File): Una o varias imágenes (requerido)
- `resize` (opcional, number): Ancho de redimensionamiento (default: 1500)
- `format` (opcional, string): Formato de salida (webp, jpeg, png; default: webp)
- `quality` (opcional, number): Calidad de la compresión (0-100, default: 80)
- `lossless` (opcional, boolean/string): true para compresión sin pérdida (default: false)

**Ejemplo de respuesta:**
```json
{
  "message": "Images compressed",
  "files": [
    "./uploads/compressed-image1.webp",
    "./uploads/compressed-image2.webp"
  ]
}
```

## Contribuciones

¡Las contribuciones son bienvenidas! Si deseas mejorar el proyecto, abre un issue o envía un pull request.

## Licencia

Este proyecto está licenciado bajo la MIT License.

## Contacto

Para dudas o sugerencias, puedes escribir a info@gexj.es
