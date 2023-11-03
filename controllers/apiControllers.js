import path from 'path'


const root = path.resolve()

export class ApiController {

    constructor() { }

    getIndexPage(req, res) {
        res.sendFile(root + '/public/index.html')
    }

    // /items?id=1&nombre=jugo
    getForQuery(req, res) {
        const { id, nombre } = req.query
        res.json({ id, nombre })
    }

    getForm(req, res) {
        console.log(req.body)
        res.json({ error: false })
    }

    postForm(req, res) {
        console.log(req.body)
        res.json({ error: false })
    }

    sendJson(req, res) {
        const data = fs.readFileSync(root + '/data/archivo.json')
        const parsedData = JSON.parse(data)
        res.send(parsedData)
    }
}