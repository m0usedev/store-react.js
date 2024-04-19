import { useState } from 'react'

import GOOD_RESULT from '../../JSON/good-result.json'

import BaseButton from '../button/BaseButton'
import ActionButton from '../button/ActionButton'

import { LeftArrow } from '../svg/svg'

import './css/Product.css'
import './css/ProductView.css'

export default function ProductView () {
  const [imgMain, setImgMain] = useState(GOOD_RESULT.images[0])
  const [dataSelect, setSataSelect] = useState(new Array(GOOD_RESULT.images.length).fill(false))

  const changeImgMain = (e) => {
    let copyData = [...dataSelect]
    copyData.fill(false)
    let views = Array.from(document.querySelectorAll('.view-option'))
    copyData[views.indexOf(e.target)] = true
    setSataSelect(copyData)
    setImgMain(e.target.src)
  }

  const viewOptions = GOOD_RESULT.images.map( (img, index) => (
    <img
      key={'img'+index}
      className='product-img view-option'
      src={img}
      alt={GOOD_RESULT.title}
      title={GOOD_RESULT.title}
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
          alt={GOOD_RESULT.title}
          title={GOOD_RESULT.title}
        />
        <ActionButton simbol={<LeftArrow/>} text='Back' />
      </div>
    </div>

    <div className='product-content'>
      <h1>{GOOD_RESULT.title}</h1>
      <div className='product-category'>
        {GOOD_RESULT.category.name}
      </div>
      <div className='product-description'>
        <p>{GOOD_RESULT.description}</p>
      </div>
      <footer>
        <div className='product-price'>
          Price <span>$ {GOOD_RESULT.price}</span>
        </div>
        <BaseButton />
      </footer>
    </div>
  </div>
  )
}