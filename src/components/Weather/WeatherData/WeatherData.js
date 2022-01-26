import React from 'react';
import PropTypes from 'prop-types';

function WeatherData(props) {
    const { weather } = props;
  return (
    <div>
        <div className="option">
            <span className='name-option'>Погода</span>
            <img src={`http://openweathermap.org/img/wn/${weather.icon}.png`} alt="" />
            <span className='option-value'>
                {weather.description}
            </span>
        </div>

    </div>
  );
}

WeatherData.propTypes = {
  weather: PropTypes.object.isRequired,
};

export default WeatherData;
