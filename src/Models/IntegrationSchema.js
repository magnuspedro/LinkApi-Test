const mongoose = require('mongoose')

const IntegrationSchema = new mongoose.Schema({
  pagination: {
    start: Number,
    limit: Number,
    more_items_in_collection: Boolean,
    next_start: Number
  },
  created_at: { type: Date, default: new Date() }
})

module.exports = mongoose.model('Integration', IntegrationSchema)
