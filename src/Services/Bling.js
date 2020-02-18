const TransactionDao = require('../Daos/TransactionDao')
const BlingBuilder = require('../Builders/BlingBuilder')
const BlingRequest = require('../Utils/Requests/BlingRequest')
const env = require('env-var')

class Bling {
  async sendDeal () {}

  async generateResponse () {
    const transactionDao = new TransactionDao()
    const blingBuilder = new BlingBuilder()
    const blingRequest = new BlingRequest(env.get('BLING_KEY').asString())
    const transactions = await transactionDao.findNotSent()

    for (const transaction of transactions) {
      if (await blingRequest.post(blingBuilder.add(transaction))) {
        transactionDao.updateStatus(transaction.id)
      }
    }
  }
}

module.exports = Bling
