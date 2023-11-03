import express from 'express'
import path from 'path'

const router = express.Router()
const root = path.resolve()

router.get('/:categoria/:id', (req, res) => {
    const { categoria, id } = req.params
    console.log(categoria, id)
    res.sendFile(root + '/public/index.html')
})


router.post('/', (req, res) => {
    res.send('parsedData')
})


export default router