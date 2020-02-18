const mongoose = require('mongoose')
const env = require('env-var')

class Database {
  constructor () {
    this._connect()
  }

  async _connect () {
    try {
      mongoose.set('useCreateIndex', true)
      await mongoose.connect(
        `mongodb+srv://${env.get('DB_USER').asString()}:${env
          .get('DB_PASSWORD')
          .asString()}@cluster0-lxnv7.mongodb.net/linkapi?retryWrites=true&w=majority`,
        { useNewUrlParser: true, useUnifiedTopology: true }
      )
      console.log('Database connection successful')
    } catch (err) {
      console.error(err)
      console.error('Database connection error')
    }
  }

  async disconnect () {
    await mongoose.disconnect()
    console.log('Database disconnected')
  }
}

module.exports = new Database()
