var TransactionSchema = require('../Models/TransactionSchema')

class TransactionDao {
  async create (response) {
    try {
      for (const data of response) {
        const transaction = await TransactionSchema.findOne({ id: data.id })
        if (!transaction) {
          await TransactionSchema.create(data)
        } else {
          console.log(`The transaction ${data.id} already exists!`)
        }
      }
    } catch (error) {
      console.error(error)
    }
  }

  async findNotSent () {
    try {
      return TransactionSchema.find({
        'integration_status.sent': false
      })
    } catch (error) {
      console.error(new Date() + ': ' + error)
    }
  }

  async updateStatus (id) {
    try {
      await TransactionSchema.updateOne(
        { id: id },
        { 'integration_status.sent': true }
      )
    } catch (error) {
      console.error(new Date() + ': ' + error)
    }
  }

  async findAll ({ page = 1, limit = 10 }) {
    const options = {
      page: page,
      limit: limit
    }
    try {
      return await TransactionSchema.paginate(
        {
          'integration_status.sent': true
        },
        options
      )
    } catch (error) {
      console.error(new Date() + ': ' + error)
    }
  }

  async findById (id) {
    try {
      return TransactionSchema.findOne({
        id: id,
        'integration_status.sent': true
      })
    } catch (error) {
      console.error(new Date() + ': ' + error)
    }
  }
}

module.exports = TransactionDao
