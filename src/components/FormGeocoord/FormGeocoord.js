import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { coordinateRequestSearch } from '../../store/geocoord/actions';
import './FormGeocoord.css';

function FormGeocoord() {
    const { loading, error } = useSelector(state => state.geocoordReducer);
    const dispatch = useDispatch()

    const [ inputValue, setInputValue ] = useState('')

    const handleChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(coordinateRequestSearch(inputValue));
        setInputValue('');
    }

  return (
    <div className='form-wrapper'>
        <h2>Узнать погоду в городах</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" 
            className='input-search-city' 
            name='city' 
            id='city'
            value={inputValue}
            onChange={handleChange}
            />
            <button>Узнать погоду</button>
        </form>
    </div>
  );
}

export default FormGeocoord;
