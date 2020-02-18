const env = require('env-var')
const PipedriveRequest = require('../../Utils/Requests/PipedriveRequest')
const TransactionDao = require('../../Daos/TransactionDao')
const IntegrationSchema = require('../../Models/IntegrationSchema')

class Pipedrive {
  async getWonDeal () {
    let response
    const transactionDao = new TransactionDao()
    const pipedriveRequest = new PipedriveRequest(
      'deals',
      env.get('PIPEDRIVE_KEY').asString()
    )

    let { start = 0, limit = 100 } =
      (await IntegrationSchema.findOne(
        {},
        {},
        {
          sort: { created_at: -1 }
        }
      )) || ''

    do {
      response = await pipedriveRequest.get({
        status: 'won',
        limit: limit,
        start: start
      })
      transactionDao.create(response.data)
      start++
    } while (response.additional_data.pagination.more_items_in_collection)
    IntegrationSchema.create(response.additional_data.pagination)
    return response
  }
}

module.exports = Pipedrive
