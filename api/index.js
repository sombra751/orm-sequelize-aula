const express = require('express')
const routes = require('./routes')

const app = express()

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });
  
const port = 3000

routes(app)

app.listen(port, () => console.log(`servidor rodando na porta ${port}`))

module.exports = app