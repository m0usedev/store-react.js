import PropTypes from 'prop-types';

import { useRef, useEffect } from 'react';

import './css/CategorysFilter.css'

export default function CategorysFilter({ reset, categorys, changeFilter }) {
  const selectRef = useRef(null)

  useEffect(() => {
    if(reset=='rate') {
      selectRef.current.value = 'All'
    }
  },[reset])

  const select = (
    <select 
      ref={selectRef}
      name="select"
      className='categorySelect'
      onChange={() =>{changeFilter(['category', selectRef.current.value])}}
    >
      <option value='All' selected>All</option>
        {
          categorys.map( (element) => {
            return (<option key={'categorys'+element.id} value={element.name}>{element.name}</option>)
          })
        }
      </select>
  )

  return (
    <div className="CategorysFilter Filter">
      <div className='title'>
        <h3>Categoría:</h3>
      </div>
      <div className='content'>
        {select}
      </div>
    </div>
  )
}

CategorysFilter.propTypes = {
  reset:PropTypes.string,
  categorys: PropTypes.array,
  changeFilter: PropTypes.func
}