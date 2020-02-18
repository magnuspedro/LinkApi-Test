const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const cors = require('cors')
const routes = require('./routes')
require('./database')

const Pipedrive = require('./Services/Pipedrive/Pipedrive')

const app = express()

app.listen(3000)
app.use(cors())
app.use(express.json())

const pipedrive = new Pipedrive()
pipedrive.getWonDeal()
// setTimeout(() => {
 
// }, 5000)



// app.use(routes)
