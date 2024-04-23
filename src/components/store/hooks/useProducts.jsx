import PropTypes from 'prop-types';

import { porductsApi } from "../utilities/products-functions"

import { useEffect, useState, createContext } from "react"

/*useProducts*/
/*useProducts*/
/*useProducts*/
export function useProducts() {
  const [products, setProducts] = useState(null)
  const [specificProduct, setSpecificProduct] = useState(null)

  useEffect ( () => {

    porductsApi()
      .then( response => setProducts(response) )

  },[])

  return { products, setProducts, specificProduct, setSpecificProduct }
}

/*ProductsProvider*/
/*ProductsProvider*/
/*ProductsProvider*/
export const ProductsContext = createContext(null)

export function ProductsProvider ({ children }) {
  const { products, setProducts, specificProduct, setSpecificProduct } = useProducts()

  return (
    <ProductsContext.Provider value={{ 
      products,
      setProducts,
      specificProduct,
      setSpecificProduct
    }}>
      { children }
    </ProductsContext.Provider>
  )
}

ProductsProvider.propTypes = {
  children: PropTypes.node,
};