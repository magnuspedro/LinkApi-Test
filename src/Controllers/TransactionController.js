const TransactionDao = require('../Daos/TransactionDao')

class TransactionController {
  async index (request, response) {
    const transactionDao = new TransactionDao()
    const transactions = await transactionDao.findAll(request.query)
    if (transactions.docs.length) {
      response.json(transactions)
    } else {
      response.status(404).send({})
    }
  }

  async show (request, response) {
    const transactionDao = new TransactionDao()
    const transaction = await transactionDao.findById(request.params.id)
    if (transaction) {
      response.json(transaction)
    } else {
      response.status(404).send({})
    }
  }
}

module.exports = new TransactionController()
