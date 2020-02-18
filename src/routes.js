const { Router } = require('express')
const routes = Router()
const TransactionController = require('./Controllers/TransactionController')

routes.get('/transactions/:id', TransactionController.show)
routes.get('/transactions', TransactionController.index)

module.exports = routes
