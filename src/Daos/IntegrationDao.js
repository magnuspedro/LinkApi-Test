const IntegrationSchema = require('../Models/IntegrationSchema')

class IntegrationDao {
  async findLastInserted () {
    return (
      (await IntegrationSchema.findOne(
        {},
        {},
        {
          sort: { created_at: -1 }
        }
      )) || ''
    )
  }

  async create (integration) {
    return IntegrationSchema.create(integration)
  }
}

module.exports = IntegrationDao
