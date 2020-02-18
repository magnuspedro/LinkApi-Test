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
}

module.exports = TransactionDao
