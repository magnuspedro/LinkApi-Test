const env = require('env-var')
const PipedriveRequest = require('../../Utils/Requests/PipedriveRequest')
const TransactionDao = require('../../Daos/TransactionDao')
const IntegrationDao = require('../../Daos/IntegrationDao')

class Pipedrive {
  async getWonDeal () {
    let response
    const transactionDao = new TransactionDao()
    const integrationDao = new IntegrationDao()
    const pipedriveRequest = new PipedriveRequest(
      'deals',
      env.get('PIPEDRIVE_KEY').asString()
    )

    let { start = 0, limit = 100 } = await integrationDao.findLastInserted()

    do {
      response = await pipedriveRequest.get({
        status: 'won',
        limit: limit,
        start: start
      })
      transactionDao.create(response.data)
      start++
    } while (response.additional_data.pagination.more_items_in_collection)
    integrationDao.create(response.additional_data.pagination)
    return response
  }
}

module.exports = Pipedrive
