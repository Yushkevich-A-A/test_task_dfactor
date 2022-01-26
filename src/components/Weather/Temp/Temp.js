import React from 'react';
import PropTypes from 'prop-types';
import translateKelvinToCelsius from '../../../lib/translateKelvinToCelsius';

function Temp(props) {
    const { temperature } = props;
  return (
    <div className="temperature">
        <div className="option">
            <span className='name-option'> Температура </span> <span className='option-value'>{translateKelvinToCelsius(temperature.temp)}</span>
        </div>
        <div className="option">
            <span className='name-option'> Максимальая температура </span> <span className='option-value'>{translateKelvinToCelsius(temperature.temp_max)}</span>
        </div>
        <div className="option">
            <span className='name-option'> Минимальная температура </span> <span className='option-value'>{translateKelvinToCelsius(temperature.temp_min)}</span>
        </div>
        <div className="option">
            <span className='name-option'> Влажность </span> <span className='option-value'>{temperature.humidity}%</span>
        </div>
        <div className="option">
            <span className='name-option'> Ощущается как</span> <span className='option-value'>{translateKelvinToCelsius(temperature.feels_like)}</span>
        </div>
    </div>
  );
}

Temp.propTypes = {
    temperature: PropTypes.object.isRequired,
};

export default Temp;
