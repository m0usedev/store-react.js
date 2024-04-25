import PropTypes from 'prop-types';

import { useEffect, useState, useRef } from 'react';
import { useDebounce } from '@uidotdev/usehooks';

import './css/SearchFilter.css'

export default function SearchFilter ({reset, changeFilter}) {
  const [value, setValue] = useState(null)
  const debounceValue = useDebounce(value, 600)
  const inputRef = useRef(null)

  useEffect(() => {
    if(reset=='rate') {
      inputRef.current.value = ''
      setValue(null)
    }
  },[reset])

  useEffect(() => {
    if(debounceValue == value) changeFilter(['search', value ? value : ''])
  }, [debounceValue])

  return (
    <div className="SearchFilter Filter">
      <div className='title'>
        <h3>Nombre producto:</h3>
      </div>
      <div className='content'>
        <input
          ref={inputRef}
          className='content-inpuit'
          type="text"
          onChange={() => {setValue(inputRef.current.value.length == 0 ? null : inputRef.current.value)}}
        />
      </div>
    </div>
  )
}

SearchFilter.propTypes = {
  reset:PropTypes.string,
  changeFilter: PropTypes.func
}