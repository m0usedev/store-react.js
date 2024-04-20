import { useState, useEffect } from "react"

import ProductCard from "./ProductCard"

import { useProducts } from "./hooks/useProducts"

import './css/ProductList.css'

export default function ProductList () {
  const { products, setProducts } = useProducts()
  const [list, setList] = useState(null)

  useEffect ( () => {
    if(products) {
      setList(
        products.map( (product) => {
          return (
            <div key={product.id} className="item-li">
              <ProductCard product={product}/>
            </div>
          )
        })
      )
    }
  }, [products])


  return (
    <div className="ProductList">
      {list}
    </div>
  )
}