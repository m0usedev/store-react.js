import PropTypes from 'prop-types';

import { useRef, useState, useEffect } from "react"

import { useCurrency } from "./hooks/useCurrency"

import './css/CurrencyFilter.css'

export default function CurrencyFilter ({ changeFilter }) {
  const { currency, setCurrencySimbol } = useCurrency()
  const [selectCurrency, setSelectCurrency] = useState()
  const selectRef = useRef(null)

  useEffect(() => {
    if(currency) {
      setSelectCurrency(
        <select 
        ref={selectRef}
        name="select"
        className='currencySelect'
        onChange={() =>{
          let elecion = currency.find( element => element.abbreviation ==  selectRef.current.value)
          setCurrencySimbol(elecion.symbol)
          changeFilter( ['rate', elecion.currency])
        }}
      >
          {
            currency.map( (element, index) => {
              if(element.abbreviation == 'USD')
                return (<option  key={element.abbreviation+index} value={element.abbreviation} selected>- {element.location}</option>)
              return (<option key={element.abbreviation+index} value={element.abbreviation}>- {element.location}</option>)
            })
          }
        </select>
      )
    }
  },[currency])

  return (
    <div className="CurrencyFilter Filter">
      <div className="title">
        <h3>Moneda:</h3>
      </div>
      <div className="content">
        {selectCurrency}
      </div>
    </div>
  )
}

CurrencyFilter.propTypes = {
  changeFilter: PropTypes.func
}