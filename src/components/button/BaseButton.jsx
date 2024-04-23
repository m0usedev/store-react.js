import PropTypes from 'prop-types';

import './css/BaseButton.css'

export default function BaseButton ({ text }) {
  return (
    <button className="BaseButton">
      <h6>{text}</h6>
    </button>
  )
}

BaseButton.propTypes = {
  text: PropTypes.string
}
