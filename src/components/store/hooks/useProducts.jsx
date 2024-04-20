import PropTypes from 'prop-types';

import { porductsApi } from "../utilities/products-functions"

import { useEffect, useState, createContext } from "react"

/*useProducts*/
/*useProducts*/
/*useProducts*/
export function useProducts() {
  const [products, setProducts] = useState(null)

  useEffect ( () => {

    porductsApi()
      .then( response => setProducts(response) )

  },[])

  return { products, setProducts }
}

/*ProductsProvider*/
/*ProductsProvider*/
/*ProductsProvider*/
const ProductsContext = createContext(null)

export function ProductsProvider ({ children }) {
  const { products, setProducts } = useProducts()

  return (
    <ProductsContext.Provider value={{ 
      products, 
      setProducts 
    }}>
      { children }
    </ProductsContext.Provider>
  )
}

ProductsProvider.propTypes = {
  children: PropTypes.func,
};