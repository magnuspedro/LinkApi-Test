const cron = require('node-cron')
const Pipedrive = require('../Services/Pipedrive')
const Biling = require('../Services/Bling')

const pipedrive = new Pipedrive()
const bling = new Biling()

let pipedriveLock = false
let blingLock = false

const PipedriveTask = cron.schedule(
  '*/1 * * * *',
  async () => {
    try {
      if (!pipedriveLock) {
        pipedriveLock = true
        console.log(new Date() + ': Retrieving new transactions...')
        await pipedrive.getWonDeal()
        pipedriveLock = false
      }
    } catch (error) {
      console.error(new Date() + ': ' + error)
      pipedriveLock = false
    }
  },
  {
    scheduled: false
  }
)

const BlingTask = cron.schedule(
  '*/1 * * * *',
  async () => {
    try {
      if (!blingLock) {
        blingLock = true
        console.log(new Date() + ': Sending transactions...')
        await bling.generateResponse()
        blingLock = false
      }
    } catch (error) {
      console.error(new Date() + ': ' + error)
      blingLock = false
    }
  },
  {
    scheduled: false
  }
)

module.exports = { PipedriveTask, BlingTask }
