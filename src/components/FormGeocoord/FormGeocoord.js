import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { coordinateRequestByName} from '../../store/geocoordAndWeather/actions';
import './FormGeocoord.css';

function FormGeocoord() {
    const { errorCitySearch, search } = useSelector(state => state.geocoordReducer);
    const dispatch = useDispatch()
    const [ inputValue, setInputValue ] = useState(search);

    useEffect(() => {
        if (search === '') {
            setInputValue(search);
        }
    }, [search])

    const handleChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(coordinateRequestByName(inputValue));
    }

  return (
    <div className='form-wrapper'>
        <h2>Узнать погоду в городах</h2>
        { errorCitySearch && <div className='error-message-city-search'>{errorCitySearch}</div>}
        <form className='form-coord' onSubmit={handleSubmit}>
            <input type="text" 
            className='input-search-city' 
            name='city' 
            id='city'
            value={inputValue}
            onChange={handleChange}
            required
            />
            <button className='search-button'></button>
        </form>
    </div>
  );
}

export default FormGeocoord;
