import PropTypes from 'prop-types';

import { porductsApi, filter, findPriceMinMax, findCategories, filtreRate } from "../utilities/products-functions"

import { useState, createContext, useEffect  } from "react"

/*useProducts*/
/*useProducts*/
/*useProducts*/
export function useProducts() {
  const RESPONSE = porductsApi()
  const [products, setProducts] = useState( RESPONSE )
  const [specificProduct, setSpecificProduct] = useState(null)
  const [priceMinMax, setPriceMinMax] = useState(findPriceMinMax(RESPONSE))
  const [categories, setCategories] = useState(findCategories())

  const filterProducts = (filtro, typeFilter) => {
    let response = filter(RESPONSE, filtro)
    if(response.type) {
      setProducts(response.products)
      if(typeFilter == 'rate') {
        setPriceMinMax(findPriceMinMax(filtreRate(RESPONSE, filtro.rate)))
      }
    }
  }

  // useEffect(() => {
  //   setInformation()
  // },[products])

  return { products, setProducts, specificProduct, setSpecificProduct, filterProducts, priceMinMax, categories }
}

/*ProductsProvider*/
/*ProductsProvider*/
/*ProductsProvider*/
export const ProductsContext = createContext(null)

export function ProductsProvider ({ children }) {
  const { products, setProducts, specificProduct, setSpecificProduct, filterProducts, priceMinMax, categories } = useProducts()

  return (
    <ProductsContext.Provider value={{ 
      products,
      setProducts,
      specificProduct,
      setSpecificProduct,
      filterProducts,
      priceMinMax,
      categories
    }}>
      { children }
    </ProductsContext.Provider>
  )
}

ProductsProvider.propTypes = {
  children: PropTypes.node,
};