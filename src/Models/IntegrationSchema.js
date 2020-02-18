const mongoose = require('mongoose')

const IntegrationSchema = new mongoose.Schema(
  {
    start: Number,
    limit: Number,
    more_items_in_collection: Boolean,
    next_start: Number
  },
  { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } }
)

module.exports = mongoose.model('Integration', IntegrationSchema)
