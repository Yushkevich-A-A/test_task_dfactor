import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Weather.css'
import { addFavouriteItem, removeFavouriteItem } from '../../store/favourites/actions';
import { coordinateRequestByCoord } from '../../store/geocoordAndWeather/actions';
import ErrorEnableGeolocation from '../Errors/ErrorEnableGeolocation/ErrorEnableGeolocation';
import Loader from '../Loadings/Loader/Loader';
import ErrorMessage from '../Errors/ErrorMessage/ErrorMessage';
import Coord from './Coord/Coord';
import WeatherData from './WeatherData/WeatherData';
import Temp from './Temp/Temp';
import Wind from './Wind/Wind';
import SystemInfo from './SystemInfo/SystemInfo';
import TimeZoneBlock from './TimeZoneBlock/TimeZoneBlock';

function Weather(props) {
  const { loading, errorWeatherSearch,  weather } = useSelector( state => state.geocoordReducer);
  const { favouriteList } = useSelector( state => state.favouriteListReducer);
  const [ errorInitial, setErrorInitial ] = useState(false);
  const [ inFavourite, setInFavourite ] = useState( false )
  const dispatch = useDispatch();

  useEffect(() => {
    if (weather) {
      favouriteList.find( item => item.id === weather.id) ? setInFavourite(true) : setInFavourite(false);
    }
  }, [favouriteList, weather])

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => dispatch(coordinateRequestByCoord({
        latitude: pos.coords.latitude,
        longitude: pos.coords.longitude,
      })),
      () => setErrorInitial(true),
    );
  }, [])

  const handleClick = () => {
    if(inFavourite) {
      dispatch(removeFavouriteItem(weather.id));
      return;
    }
    const item = { name: weather.name, id: weather.id }
    dispatch(addFavouriteItem(item));
  }

  return (
    <div className="weather-block-wrapper">
      { !weather && errorInitial && <ErrorEnableGeolocation />}
      { loading && <Loader />}
      { errorWeatherSearch && <ErrorMessage message={errorWeatherSearch} />}
      { weather && !loading && !errorWeatherSearch && <div className='weather-block'>
          <div className="title-block">
            <h2 className="title-block_h2">Погода в городе {weather.name}</h2>
            <div className="wrapper" onClick={handleClick}>
              <div className={`heart ${inFavourite ? 'heart-active' : 'heart-disactive'}`}></div>
            </div>    
          </div>
            <Coord coord={weather.coord}/>
            <WeatherData weather={weather.weather[0]}/>
            <Temp temperature={ weather.main }/>
            <Wind wind={weather.wind} />
            <SystemInfo sys={weather.sys} />
            <TimeZoneBlock timezone={weather.timezone}/>
      </div>}
    </div>
  );
}

export default Weather;
