const env = require('env-var')
const PipedriveRequest = require('../../Utils/Requests/PipedriveRequest')
const TransactionDao = require('../../Daos/TransactionDao')
const IntegrationSchema = require('../../Models/IntegrationSchema')

class Pipedrive {
  async getWonDeal () {
    let start = 0
    let response
    let limit = 100
    const transactionDao = new TransactionDao()
    const pipedriveRequest = new PipedriveRequest(
      'deals',
      env.get('PIPEDRIVE_KEY').asString()
    )

    let pagination = await IntegrationSchema.findOne(
      {},
      {},
      {
        sort: { created_at: -1 }
      }
    )

    if (pagination) {
      pagination = pagination.pagination
      if (!pagination.more_items_in_collection) {
        start = pagination.start
      } else {
        start = pagination.next_start
      }
      limit = pagination.limit
    }

    do {
      response = await pipedriveRequest.get({
        status: 'won',
        limit: limit,
        start: start
      })
      transactionDao.create(response.data)
      start++
    } while (response.additional_data.pagination.more_items_in_collection)
    IntegrationSchema.create(response.additional_data)
    return response
  }
}

module.exports = Pipedrive
