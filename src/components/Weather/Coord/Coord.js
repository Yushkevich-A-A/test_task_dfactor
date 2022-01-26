import React from 'react';
import PropTypes from 'prop-types';

function Coord(props) {
    const { coord } = props;

  return (
    <div className="city-coordinate">
        <div className="option">
        <span className='name-option'> Широта</span> <span className='option-value'>{coord.lat}</span>
        </div>
        <div className="option">
        <span className='name-option'> Долгота</span> <span className='option-value'>{coord.lon}</span>
        </div>
    </div>
  );
}

Coord.propTypes = {
  coord: PropTypes.object.isRequired,
};

export default Coord;
