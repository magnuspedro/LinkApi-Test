const express = require('express')
const cors = require('cors')
const routes = require('./routes')
require('dotenv').config()
require('./database')
const IntegrationTask = require('./Tasks/IntegrationTask')

const app = express()

app.listen(3000)
app.use(cors())
app.use(express.json())
// app.use(routes)

// IntegrationTask.start()
