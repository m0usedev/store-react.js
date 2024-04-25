import { useState, useContext, useEffect } from 'react';

import Pagination from '@mui/material/Pagination';

import { usePagination } from './utilities/usePagination';
import { ProductsContext } from './hooks/useProducts';

import './css/MuiPagination-root.css'

export default function StorePagination () {
  const { products } = useContext(ProductsContext)
  const { numPagination, setNumPagination } = usePagination()
  const [maxPaginaton, setMaxPaginaton] = useState(null)

  useEffect(() => {
    if(numPagination){
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }, [numPagination])

  const onChange = (event, page) => {
    setNumPagination(page)
  }

  useEffect( () => {
    if(products){
      setMaxPaginaton(Math.ceil(products.length/10))
    }
  }, [products])
  
  return (
    <div className="Pagination">
      <Pagination page={numPagination} count={maxPaginaton ? maxPaginaton : 1} color="primary"  onChange={onChange}/>
    </div>
  )
}