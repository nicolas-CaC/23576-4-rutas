import express from 'express'
import apiRoutes from './routes/apiRoutes.js'
import productosRoutes from './routes/productosRoutes.js'

const app = express()
const PORT = 8080

app.use(express.static('public'))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', apiRoutes)
app.use('/productos', productosRoutes)


app.listen(PORT, () => { console.log(`http://localhost:${PORT}`) })