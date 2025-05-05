require('dotenv').config()
const http = require('http')

function requestController(req, res) {
    res.end('Bienvenidos al curso') // Esto es importante para Render
    console.log('Bienvenidos al curso')
}

const server = http.createServer(requestController)

const PORT = process.env.PORT || 3000

server.listen(PORT, () => {
    console.log("Aplicación corriendo en: " + PORT)
})
