const axios = require('axios')
const qs = require('querystring')

class BlingRequest {
  constructor (apiToken) {
    this._url = 'https://bling.com.br/Api/v2/pedido/json/'
    this._apiToken = apiToken
  }

  async post (data) {
    try {
      const response = await axios.post(
        this._url,
        qs.stringify({
          apikey: this._apiToken,
          xml: data
        }),
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }
      )
      return response.data
    } catch (error) {
      console.error(new Date() + ': Status code: ' + error.response.status)
      console.error(JSON.stringify(error.response.data))
      return false
    }
  }
}

module.exports = BlingRequest
