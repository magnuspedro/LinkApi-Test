const ConvertXml = require('../Utils/ConvertXml')
const moment = require('moment')

class BlingBuilder {
  add (transaction) {
    const transactionObject = {
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
    return ConvertXml.convertToXml(transactionObject)
  }
}

module.exports = BlingBuilder
