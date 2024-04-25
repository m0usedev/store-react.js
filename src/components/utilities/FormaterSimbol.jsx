import PropTypes from 'prop-types';

export default function FormaterSimbol ({simbol}) {
  return (
    <div className="FormaterSimbol">
      <span className='currencySimbol' dangerouslySetInnerHTML={{ __html: simbol }} />
    </div>
  )
}

FormaterSimbol.propTypes = {
  simbol: PropTypes.string
};