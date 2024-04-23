import PropTypes from 'prop-types';

import { useState, createContext, useContext } from "react"

/*useProducts*/
/*useProducts*/
/*useProducts*/
export function usePagination() {
  const { numPagination, setNumPagination } = useContext(PaginationContext)
  return { numPagination, setNumPagination }
}

/*ProductsProvider*/
/*ProductsProvider*/
/*ProductsProvider*/
export const PaginationContext = createContext(null)

export function PaginationProvider ({ children }) {
  const [numPagination, setNumPagination] = useState(1)

  return (
    <PaginationContext.Provider value={{ 
      numPagination,
      setNumPagination
    }}>
      { children }
    </PaginationContext.Provider>
  )
}

PaginationProvider.propTypes = {
  children: PropTypes.array,
};