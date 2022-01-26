import React from 'react';
import PropTypes from 'prop-types';
import './ButtonDelete.css';

function ButtonDelete(props) {
    const { handleClicRemove } = props;
    

  return(
        <div className="btn-delete" onClick={handleClicRemove}>
            
        </div>
  );
}

ButtonDelete.propTypes = {
  handleClicRemove: PropTypes.func
};

export default ButtonDelete;
