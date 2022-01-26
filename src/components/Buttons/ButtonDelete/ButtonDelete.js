import React from 'react';
import './ButtonDelete.css';

function ButtonDelete(props) {
    const { handleClicRemove } = props;
    

  return(
        <div className="btn-delete" onClick={handleClicRemove}>
            
        </div>
  );
}

export default ButtonDelete;
