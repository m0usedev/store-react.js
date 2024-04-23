import { useState, useEffect, useContext, useRef } from "react"

import ProductCard from "./ProductCard"
import ProductView from "./ProductView"

import { VisibilityContext } from "../../utilities/visibility/visibility"
import { ProductsContext } from "./hooks/useProducts"

import { usePagination } from "./utilities/usePagination"

import './css/Product.css'
import './css/ProductList.css'
import './css/MuiPagination-root.css'

export default function ProductList () {
  const { products, specificProduct} = useContext(ProductsContext)
  const [list, setList] = useState(null)

  const {visibility, setVisibility} = useContext(VisibilityContext)
  const blurProductView = useRef()

  const { numPagination  } = usePagination()

  const tranformProduct = (array) => {
    return array.map( (product) => {
      return (
        <div key={product.id} className="item-li">
          <ProductCard product={product}/>
        </div>
      )
    })
  }

  useEffect ( () => {
    if(products) {
      let newProducts = structuredClone(products).slice( 0, 10 )
      setList(tranformProduct(newProducts))
    }
  }, [products])

  useEffect ( () => {
    if(numPagination && list) {
      let newList
      if( numPagination == Math.ceil(products.length/10) ) {
        newList = structuredClone(products).slice( 10* (numPagination-1) )
      }else {
        newList =  structuredClone(products).slice(10* (numPagination-1), 10* numPagination)
      }
      setList(tranformProduct(newList))
    }
  }, [numPagination])

  useEffect(() => {
    let primeraVez = false

    const outOnClick = (e) => {
      if (primeraVez && blurProductView.current.contains(e.target)) {
        setVisibility(false)
      }
      primeraVez = true
    }

    window.addEventListener('click', outOnClick)

    return () => {
      window.removeEventListener('click', outOnClick)
    }
  }, [visibility])

  return (
    <div className="ProductList">
      {list}
      <div className="container-ProductView" data-visibility={visibility}>
        {
          specificProduct ?
            <ProductView product={specificProduct}/>
          :
            null
        }
        <div ref={blurProductView} className="blur-background"/>
      </div>
    </div>
  )
}