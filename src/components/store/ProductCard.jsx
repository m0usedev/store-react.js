
import GOOD_RESULT from '../../JSON/good-result.json'

import BaseButton from '../button/BaseButton'

import './css/Product.css'
import './css/ProductCard.css'

export default function ProductCard () {
  return (
    <div className='ProductCard'>
      <img
        className='product-img'
        src={GOOD_RESULT.images[0]}
        alt={GOOD_RESULT.title}
        title={GOOD_RESULT.title}
      />
      <h3>{GOOD_RESULT.title}</h3>
      <p>
        {
          GOOD_RESULT.description.substring(0, 20)
        }...
        <span>Read More</span>
      </p>
      <div className='product-category'>
        {GOOD_RESULT.category.name}
      </div>

      <footer>
        <div className='product-price'>
          Price <span>$ {GOOD_RESULT.price}</span>
        </div>
        <BaseButton />
      </footer>
    </div>
  )
}