import { ApiController } from './../controllers/apiControllers.js'
import express from 'express'

const router = express.Router()
const controller = new ApiController()

router.get('/', controller.getIndexPage)

router.get('/items', controller.getForQuery)

router.get('/form', controller.getForm)

router.post('/form', controller.postForm)

router.post('/', controller.sendJson)


export default router
