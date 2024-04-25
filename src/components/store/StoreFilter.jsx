import { useContext, useEffect, useState } from 'react'

import { IS_DEVELOPMENT } from '../../utilities/global'

import { ProductsContext } from './hooks/useProducts'
import { useFilter } from './hooks/useFilter'
import { usePagination } from './utilities/usePagination'

import SearchFilter from './SerachFilter'
import PriceSliderFilter from './PriceSliderFilter'
import CategorysFilter from './CategorysFilter'
import CurrencyFilter from './CurrencyFilter'

import './css/StoreFilter.css'

export default function StoreFilter (){
  const { filterProducts, priceMinMax, categories  } = useContext(ProductsContext)
  const { setNumPagination } = usePagination()
  const { filtro, setFiltro, modifyFilter } = useFilter()
  const [typeFilter, setTypeFilter] = useState (null)
  
  const changeFilter = (change) => {
    setTypeFilter(change[0])
    let response = modifyFilter(change)
    response && !response.type && IS_DEVELOPMENT  ? console.log(response.mesaje) : null
  }

  useEffect(() => {
    setFiltro({
      search : '',
      priceRange: {
        min: priceMinMax.min,
        max: priceMinMax.max
      },
      category : 'All',
      rate: 1
    })
  },[])

  useEffect(() => {
    if(filtro){
      setNumPagination(1)
      filterProducts(filtro, typeFilter)
    }
  },[filtro])

  return (
    <div className="StoreFilter">
      <div className='title'>
        <h1>Filtros</h1>
      </div>
      <SearchFilter
        reset={typeFilter}
        changeFilter={changeFilter}
      />
      <PriceSliderFilter 
          min={priceMinMax.min}
          max={priceMinMax.max}
          changeFilter={changeFilter}
        />
      <CategorysFilter
        reset={typeFilter}
        categorys={categories}
        changeFilter={changeFilter}
      />
      <CurrencyFilter changeFilter={changeFilter}/>
    </div>
  )
}