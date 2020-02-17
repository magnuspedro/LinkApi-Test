const env = require('env-var')
const Transaction = require('../../Models/Transaction')
const PipedriveRequest = require('../../Utils/Requests/PipedriveRequest')

class Pipedrive {
  async getWonDeal () {
    const pipedriveRequest = new PipedriveRequest(
      'deals',
      '21b2b98184d845118b80aedbd7d656080420ffe3'
    )
    const response = await pipedriveRequest.get({ status: 'won', start: 0 })
    Transaction.create()
    return response
  }
}

module.exports = Pipedrive
