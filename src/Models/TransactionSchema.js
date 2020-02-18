const mongoose = require('mongoose')

const TransactionSchema = new mongoose.Schema(
  {
    id: { type: Number, index: true },
    creator_user_id: {
      id: Number,
      name: String,
      email: String,
      has_pic: Number,
      pic_hash: String,
      active_flag: Boolean,
      value: Number
    },
    user_id: {
      id: Number,
      name: String,
      email: String,
      has_pic: Number,
      pic_hash: String,
      active_flag: Boolean,
      value: Number
    },
    person_id: {
      active_flag: Boolean,
      name: String,
      email: [
        {
          value: String,
          primary: Boolean
        }
      ],
      phone: [
        {
          value: String,
          primary: Boolean
        }
      ],
      value: Number
    },
    org_id: Number,
    stage_id: Number,
    title: String,
    value: Number,
    currency: String,
    add_time: Date,
    update_time: Date,
    stage_change_time: Date,
    active: Boolean,
    deleted: Boolean,
    status: String,
    probability: String,
    next_activity_date: Date,
    next_activity_time: Date,
    next_activity_id: Date,
    last_activity_id: Date,
    last_activity_date: Date,
    lost_reason: String,
    visible_to: String,
    close_time: Date,
    pipeline_id: Number,
    won_time: Date,
    first_won_time: Date,
    lost_time: Date,
    products_count: Number,
    files_count: Number,
    notes_count: Number,
    followers_count: Number,
    email_messages_count: Number,
    activities_count: Number,
    done_activities_count: Number,
    undone_activities_count: Number,
    reference_activities_count: Number,
    participants_count: Number,
    expected_close_date: Date,
    last_incoming_mail_time: Date,
    last_outgoing_mail_time: Date,
    label: Date,
    stage_order_nr: Number,
    person_name: String,
    org_name: String,
    next_activity_subject: String,
    next_activity_type: String,
    next_activity_duration: String,
    next_activity_note: String,
    formatted_value: String,
    weighted_value: Number,
    formatted_weighted_value: String,
    weighted_value_currency: String,
    rotten_time: Date,
    owner_name: String,
    cc_email: String,
    org_hidden: Boolean,
    person_hidden: Boolean,
    integration_status: {
      sent: { type: Boolean, default: false }
    }
  },
  { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } }
)

module.exports = mongoose.model('Transaction', TransactionSchema)
