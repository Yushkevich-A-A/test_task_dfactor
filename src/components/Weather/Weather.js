import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import translateKelvinToCelsius from '../../lib/translateKelvinToCelsius';
import dataHours from '../../lib/dataHours';
import './Weather.css'
import { addFavouriteItem, removeFavouriteItem } from '../../store/favourites/actions';

function Weather(props) {
  const { weather } = useSelector( state => state.geocoordReducer);
  const { favouriteList } = useSelector( state => state.favouriteListReducer);
  const dispatch = useDispatch();

  const inFavourite = favouriteList.find( item => item.id === weather.id) ? true : false;

  const handleClick = () => {
    if(inFavourite) {
      dispatch(removeFavouriteItem(weather.id))
      return;
    }
    const item = {
      coord: weather.coord,
      name: weather.name,
      id: weather.id
    }

    dispatch(addFavouriteItem(item));
  }

  return (
    <div className="weather-block-wrapper">
      {weather && <div className='weather-block'>
          <div className="title-block">
            <h2 className="title-block_h2">Погода в городе {weather.name}</h2>
            <div className="wrapper" onClick={handleClick}>
              <div className={`heart ${inFavourite ? 'heart-active' : 'heart-disactive'}`}></div>
            </div>    
          </div>
            <div className="city-coordinate">
              <div className="option">
                <span className='name-option'> Широта</span> <span className='option-value'>{weather.coord.lat}</span>
              </div>
              <div className="option">
                <span className='name-option'> Долгота</span> <span className='option-value'>{weather.coord.lon}</span>
              </div>
            </div>
            <div className="timezone"></div>
            <div className="temperature">
              <div className="option">
                  <span className='name-option'> Ощущается как</span> <span className='option-value'>{translateKelvinToCelsius(weather.main.feels_like)}</span>
              </div>
              <div className="option">
                  <span className='name-option'> Влажность </span> <span className='option-value'>{weather.main.humidity}%</span>
              </div>
              <div className="option">
                  <span className='name-option'> Температура </span> <span className='option-value'>{translateKelvinToCelsius(weather.main.temp)}</span>
              </div>
              <div className="option">
                  <span className='name-option'> Максимальая температура </span> <span className='option-value'>{translateKelvinToCelsius(weather.main.temp_max)}</span>
              </div>
              <div className="option">
                  <span className='name-option'> Минимальная температура </span> <span className='option-value'>{translateKelvinToCelsius(weather.main.temp_min)}</span>
              </div>
            </div>
            {dataHours(weather.timezone)}
      </div>}
    </div>
  );
}

export default Weather;
