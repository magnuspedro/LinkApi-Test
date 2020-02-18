const TransactionDao = require('../Daos/TransactionDao')

class TransactionController {
  async index (request, response) {
    const transactionDao = new TransactionDao()
    const transactions = await transactionDao.findAll()
    if (transactions.length) {
      response.json(transactions)
    } else {
      response.status(204).send({})
    }
  }

  async show (request, response) {
    const transactionDao = new TransactionDao()
    const transaction = await transactionDao.findById(request.params.id)
    if (transaction) {
      response.json(transaction)
    } else {
      response.status(204).send({})
    }
  }
}

module.exports = new TransactionController()
