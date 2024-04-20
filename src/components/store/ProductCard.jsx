import PropTypes from 'prop-types';

import BaseButton from '../button/BaseButton'

import './css/Product.css'
import './css/ProductCard.css'

export default function ProductCard ({ product }) {
  return (
    <div className='ProductCard'>
      <img
        className='product-img'
        src={product.images[0]}
        alt={product.title}
        title={product.title}
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
          Price <span>$ {product.price}</span>
        </div>
        <BaseButton />
      </footer>
    </div>
  )
}

ProductCard.propTypes = {
  product: PropTypes.object
};
