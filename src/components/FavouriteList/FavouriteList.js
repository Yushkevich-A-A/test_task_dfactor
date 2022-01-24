import React from 'react';
import FavouriteItem from './FavouriteItem/FavouriteItem';
import './FavouriteList.css';

function FavouriteList(props) {
  const item = {
    city_name: 'Москва',
    place_id : "ChIJybDUc_xKtUYRTM9XV8zWRD0",
    coords: {
      lat: 55.755826,
      lng : 37.6172999,
    }
  }

  return (
    <div className='favourite-block'>
      <h2>Избранное</h2>
      <FavouriteItem item={item}/>
    </div>
  );
}

export default FavouriteList;
