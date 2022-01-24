import React, { useState } from 'react';
import './FormGeocoord.css';

function FormGeocoord() {
    const [ inputValue, setInputValue ] = useState('')

    const handleChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputValue);
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
