const js2xmlparser = require('js2xmlparser')

const convertToXml = object => {
  return js2xmlparser.parse('pedido', object)
}

module.exports = {
  convertToXml: convertToXml
}
