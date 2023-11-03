let instance = null

class Objeto {

    constructor() { }

    static getInstance() {
        if (instance == null)
            instance = new Objeto()
        return instance
    }

    getAlgo() {
    }
}


const x = Objecto.getInstance()