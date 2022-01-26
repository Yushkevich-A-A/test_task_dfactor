import React from 'react';
import FormGeocoord from '../FormGeocoord/FormGeocoord';
import FavouriteList from '../FavouriteList/FavouriteList';
import './RequestBlockData.css';

function RequestBlockData(props) {
  return (
        <div className='RequestBlockData'>
            <FormGeocoord />
            <FavouriteList />
        </div>
    );
}


export default RequestBlockData;
