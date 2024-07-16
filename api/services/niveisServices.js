const Services = require('./services')
const database = require('../models')

class NiveisServices extends Services{
    constructor() {
        super('Niveis')
    }
}

module.exports = NiveisServices