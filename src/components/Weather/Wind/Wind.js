import React from 'react';
import PropTypes from 'prop-types';

function Wind(props) {
    const { wind } = props;

    return (
        <div className='wind'>
            <div className="option">
                <span className='name-option'>Скорость ветра</span> <span className='option-value'>{wind.speed}м/с</span>
            </div>
        </div>
    );
}

Wind.propTypes = {
    wind: PropTypes.object.isRequired,
};

export default Wind;
