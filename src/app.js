//APP

const winston = require('winston')
const express = require('express')
const path = require('path');
const cors = require('cors')


require('dotenv').config()

const app = express();

require('./startup/logging')()
require('./startup/routes')(app)
require('./startup/db')()


app.use(cors())
app.use('/', express.static(path.join(__dirname, 'public')))

//PUERTO DE ESCUCHA

const port = process.env.PORT || 3000
app.listen(port, () => winston.info(`SERVIDOR CONECTADO EN: http://localhost:${port}`))