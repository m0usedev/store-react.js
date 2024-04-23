import PropTypes from 'prop-types';

import { useContext } from 'react';

import { VisibilityContext } from '../../utilities/visibility/visibility';

import './css/ActionButton.css'

export default function ActionButton ({ simbol, text }) {
  const {setVisibility} = useContext(VisibilityContext);

  return (
    <button className="ActionButton" onClick={() => setVisibility(false)}>
      <span className='simbol'>{simbol}</span>
      <span className='text'>{text}</span>
    </button>
  )
}

ActionButton.propTypes = {
  simbol: PropTypes.object,
  text: PropTypes.string
};