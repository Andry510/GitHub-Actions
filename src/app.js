//Dependecias de node
import express from 'express'
import { createServer } from "http"

//Iniciación
const app = express()
const server = createServer(app)
const port = 3000

//Configuración
app.set('port', port)

//Rutas 
app.get('/', (req, res) => {
    res.send('!Hola Mundo!')
})

export { app, server }