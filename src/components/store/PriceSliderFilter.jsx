import PropTypes from 'prop-types';

import { useState, useEffect } from 'react';

import Slider from '@mui/material/Slider';
import { useDebounce } from "@uidotdev/usehooks";

import Money from '../utilities/Money';

import { useCurrency } from './hooks/useCurrency';

import './css/PriceSlider.css'

function valuetext(value) {
  return `${value}`;
}

const minDistance = 10;

export default function PriceSliderFilter ({ min, max, changeFilter }) {
  const [value, setValue] = useState([min, max])
  const debounceValue = useDebounce(value, 600)
  const { currencySimbol } = useCurrency()

  useEffect(() => {
    setValue([min, max])
  },[min, max])

  useEffect (() => {
    if(value.every((value, index) => value === debounceValue[index])) {
      changeFilter(['priceRange', {
        min: value[0],
        max: value[1]
      }])
    }
  }, [debounceValue])

  const handleChange1 = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue([Math.min(newValue[0], value[1] - minDistance), value[1]]);
    } else {
      setValue([value[0], Math.max(newValue[1], value[0] + minDistance)]);
    }
  }

  return (
    <div className="PriceSlider Filter">
      <div className='title'>
        <h3>Rango de precios:</h3>
      </div>
      <div className='content'>
        <div className='content-slider'>
          <Slider
            getAriaLabel={() => 'Minimum distance'}
            value={value}
            onChange={handleChange1}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
            disableSwap
            min={min}
            max={max}
          />
        </div>
        <div className='resume'>
          <div className='content-num'>
            <Money
              num={value[0]}
              simbol={currencySimbol}
              positionSimbol="rigth"
            />
          </div>
          <div>
            -
          </div>
          <div className='content-num'>
            <Money
              num={value[1]}
              simbol={currencySimbol}
              positionSimbol="rigth"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

PriceSliderFilter.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  changeFilter: PropTypes.func
}

/**
 import PropTypes from 'prop-types';

import { useState, useEffect, useContext } from 'react';

import Slider from '@mui/material/Slider';
import { useDebounce } from "@uidotdev/usehooks";

import Money from '../utilities/Money';

import { useCurrency } from './hooks/useCurrency';
import { ProductsContext } from './hooks/useProducts';

import './css/PriceSlider.css'

function valuetext(value) {
  return `${value}`;
}

const minDistance = 10;

export default function PriceSliderFilter ({ changeFilter }) {
  const { priceMinMax } = useContext(ProductsContext)
  const [value, setValue] = useState([priceMinMax.min, priceMinMax.max])
  const debounceValue = useDebounce(value, 600)
  const { currencySimbol } = useCurrency()

  useEffect(() => {
    setValue([priceMinMax.min, priceMinMax.max])
  },[priceMinMax])

  useEffect (() => {
    if(value.every((value, index) => value === debounceValue[index])) {
      changeFilter({
        min: value[0],
        max: value[1]
      })
    }
  }, [debounceValue])

  const handleChange1 = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue([Math.min(newValue[0], value[1] - minDistance), value[1]]);
    } else {
      setValue([value[0], Math.max(newValue[1], value[0] + minDistance)]);
    }
  }

  return (
    <div className="PriceSlider Filter">
      <div className='title'>
        <h3>Rango de precios:</h3>
      </div>
      <div className='content'>
        <div className='content-num'>
          <Money
            num={value[0]}
            simbol={currencySimbol}
            positionSimbol="rigth"
          />
        </div>
        
        <div className='content-slider'>
          <Slider
            getAriaLabel={() => 'Minimum distance'}
            value={value}
            onChange={handleChange1}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
            disableSwap
            min={priceMinMax.min}
            max={priceMinMax.max}
          />
        </div>
        <div className='content-num'>
          <Money
            num={value[1]}
            simbol={currencySimbol}
            positionSimbol="rigth"
          />
        </div>
      </div>
    </div>
  )
}

PriceSliderFilter.propTypes = {
  changeFilter: PropTypes.func
}
 */