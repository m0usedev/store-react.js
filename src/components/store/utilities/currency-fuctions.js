const CURRENCY_URL = 'https://open.er-api.com/v6/latest/USD'

import iconCurrency from '../../../utilities/currency-symbol.json'

function refactorObject (object) {
  return {
    rates : object.rates,
  }
}

export async function currencyApi () {
  return fetch(CURRENCY_URL)
    .then( response => response.json() )
    .then( data => {
      let refactor = refactorObject(data)
      let array = iconCurrency.map( (element) => {
        if(Object.hasOwnProperty.call(refactor.rates, element.abbreviation)){
          return {
            location     : element.currency,
            abbreviation : element.abbreviation,
            symbol       : element.symbol,
            currency     : refactor.rates[element.abbreviation]
          }
        }
      }).filter(element => element != null)
      return array.filter(element => element !== null)
    })
}

export function convertCurrency(amount,  toRate) {
  const convertedAmount = toRate * amount
  return parseFloat(convertedAmount.toFixed(2))
}