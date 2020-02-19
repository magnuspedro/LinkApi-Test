const ConvertXml = require('../Utils/ConvertXml')
const moment = require('moment')

// it's not a Builder pattern really, it construct the object I need though
class BlingBuilder {
  constructor () {
    this._transactionObject = {}
  }

  add (transaction) {
    this._transactionObject = {
      data: moment(transaction.add_time).format('DD/MM/YYYY'),
      data_saida: moment(transaction.won_time).format('DD/MM/YYYY'),
      numero: transaction.id,
      numero_loja: transaction.id,

      cliente: {
        id: transaction.user_id.id,
        nome: transaction.user_id.name,
        email: transaction.user_id.email
      },
      itens: [
        {
          item: {
            codigo: transaction.id,
            descricao: transaction.title,
            vlr_unit: transaction.value,
            qtde: 1
          }
        }
      ],
      parcelas: [
        {
          parcela: {
            data: moment(transaction.add_time).format('DD/MM/YYYY'),
            vlr: transaction.value
          }
        }
      ]
    }
    return this
  }

  build () {
    return ConvertXml.convertToXml(this._transactionObject)
  }

  get bling () {
    return this._transactionObject
  }
}

module.exports = BlingBuilder
