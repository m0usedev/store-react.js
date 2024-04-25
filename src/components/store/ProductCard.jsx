import PropTypes from 'prop-types';

import { useContext } from 'react';

import { useCurrency } from './hooks/useCurrency';

import BaseButton from '../button/BaseButton'
import Money from '../utilities/Money';

import { VisibilityContext } from "../../utilities/visibility/visibility"
import { ProductsContext } from './hooks/useProducts';

import './css/Product.css'
import './css/ProductCard.css'

export default function ProductCard ({ product }) {
  const { setVisibility }      = useContext(VisibilityContext)
  const { setSpecificProduct } = useContext(ProductsContext)
  const { currencySimbol } = useCurrency()


  return (
    <div className='ProductCard'>
      <img
        className = 'product-img'
        src       = {product.images[0]}
        alt       = {product.title}
        title     = {product.title}
        onClick   = {() => {
          setSpecificProduct(product)
          setVisibility(true)
        }}
      />
      <h3>{product.title}</h3>
      <p>
        {
          product.description.substring(0, 20)
        }...
        <span>Read More</span>
      </p>
      <div className='product-category'>
        {product.category.name}
      </div>

      <footer>
        <div className='product-price'>
          Price
          <Money
            num={product.price}
            simbol={currencySimbol}
            positionSimbol="lefth"
          />
        </div>
        <BaseButton text='Add to cart'/>
      </footer>
    </div>
  )
}

ProductCard.propTypes = {
  product: PropTypes.object
};
