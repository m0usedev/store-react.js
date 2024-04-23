import PropTypes from 'prop-types';

import { useEffect, useState} from 'react'

import BaseButton from '../button/BaseButton'
import ActionButton from '../button/ActionButton'

import { LeftArrow } from '../svg/svg'

import './css/Product.css'
import './css/ProductView.css'

export default function ProductView ({ product }) {
  const [imgMain, setImgMain] = useState(product.images[0])
  const [dataSelect, setSataSelect] = useState([true].concat(new Array(product.images.length-1).fill(false)))

  useEffect( () => {
    setImgMain(product.images[0])
    setSataSelect([true].concat(new Array(product.images.length-1).fill(false)))
  }, [product])

  const changeImgMain = (e) => {
    let copyData = [...dataSelect]
    copyData.fill(false)
    let views = Array.from(document.querySelectorAll('.view-option'))
    copyData[views.indexOf(e.target)] = true
    setSataSelect(copyData)
    setImgMain(e.target.src)
  }

  const viewOptions = product.images.map( (img, index) => (
    <img
      key={'img'+index}
      className='product-img view-option'
      src={img}
      alt={product.title}
      title={product.title}
      onClick={changeImgMain}
      data-selected = {dataSelect[index]}
    />
  ) ) 
  
  return (
  <div className='ProductView'>
    <div className='product-views'>
      <div className='view-options'>
        { viewOptions }
      </div>
      <div className='view-main'>
        <img
          className='product-img'
          src={imgMain}
          alt={product.title}
          title={product.title}
        />
        <ActionButton simbol={<LeftArrow/>} text='Back' />
      </div>
    </div>

    <div className='product-content'>
      <h1>{product.title}</h1>
      <div className='product-category'>
        {product.category.name}
      </div>
      <div className='product-description'>
        <p>{product.description}</p>
      </div>
      <footer>
        <div className='product-price'>
          Price <span>$ {product.price}</span>
        </div>
        <BaseButton />
      </footer>
    </div>
  </div>
  )
}

ProductView.propTypes = {
  product: PropTypes.object
};
