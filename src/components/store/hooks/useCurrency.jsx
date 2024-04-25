import PropTypes from 'prop-types';

import { useEffect, useState, createContext, useContext } from "react";

import { currencyApi } from "../utilities/currency-fuctions";

export function useCurrency () {
  const { currency, setCurrency, currencySimbol, setCurrencySimbol } = useContext(CurrencyContext)
  
  return { currency, currencySimbol, setCurrencySimbol }
}

export const CurrencyContext = createContext()

export function CurrencyProvider ({ children }) {
  const [currency, setCurrency] = useState()
  const [currencySimbol, setCurrencySimbol] = useState('&#36;')

  useEffect(() => {
    currencyApi()
      .then(response => setCurrency(response))
  },[])

  return (
    <CurrencyContext.Provider value={{
      currency,
      setCurrency,
      currencySimbol,
      setCurrencySimbol
    }}>
      {children}
    </CurrencyContext.Provider>
  )
}

CurrencyProvider.propTypes = {
  children: PropTypes.node,
};