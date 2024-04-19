import PropTypes from 'prop-types';

import './css/ActionButton.css'

export default function ActionButton ({ simbol, text }) {
  return (
    <button className="ActionButton">
      <span className='simbol'>{simbol}</span>
      <span className='text'>{text}</span>
    </button>
  )
}

ActionButton.propTypes = {
  simbol: PropTypes.none,
  text: PropTypes.string
};