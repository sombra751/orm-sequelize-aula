const Services = require('./services')
const database = require('../models')

class MatriculasServices extends Services{
    constructor() {
        super('Niveis')
    }
}

module.exports = MatriculasServices