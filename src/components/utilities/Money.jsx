import PropTypes from 'prop-types';

import FormaterSimbol from './FormaterSimbol';

import './css/Money.css'

export default function Money ({ num, simbol, positionSimbol }) {
  return (
    <div className={"Money "+ positionSimbol}>
      <span>{num}</span>
      <FormaterSimbol simbol={simbol}/>
    </div>
  )
}

Money.propTypes = {
  num: PropTypes.number,
  simbol: PropTypes.string,
  positionSimbol: PropTypes.string
};