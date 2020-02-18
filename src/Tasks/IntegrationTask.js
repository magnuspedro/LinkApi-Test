const cron = require('node-cron')
const Pipedrive = require('../Services/Pipedrive/Pipedrive')

const pipedrive = new Pipedrive()

let integrationLock = false

const IntegrationTask = cron.schedule(
  // '*/10 * * * *',
  '*/1 * * * *',
  async () => {
    try {
      if (!integrationLock) {
        integrationLock = true
        console.log(new Date() + ': Retrieving new transactions...')
        await pipedrive.getWonDeal()
        integrationLock = false
      }
    } catch (error) {
      console.error(new Date() + ': ' + error)
      integrationLock = false
    }
  },
  {
    scheduled: false
  }
)

module.exports = IntegrationTask
