import React from 'react';
import PropTypes from 'prop-types';
import './ErrorMessage.css';

function ErrorMessage(props) {
    const { message } = props;

  return (
        <div className='error-message-city-search'>{message}</div>
  );
}

ErrorMessage.propTypes = {
    message: PropTypes.string,
};

export default ErrorMessage;
