const axios = require('axios')

class PipedriveRequest {
  constructor (url, apiToken) {
    this._url =
      'https://blueprinttsl.pipedrive.com/v1/' + url + '?api_token=' + apiToken
  }

  async get (params) {
    try {
      const response = await axios.get(this._url, { params })
      return response
    } catch (error) {
      console.error(new Date() + ': Status code: ' + error.response.status)
      console.error(error.response.data)
    }
  }
}

module.exports = PipedriveRequest
