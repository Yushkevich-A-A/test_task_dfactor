import React from 'react';
import './FavouriteItem.css';

function FavouriteItem(props) {
    const { item } = props;

    return (
        <div className='favourite-item'>
            <div className="favourite-city-name">{item.city_name}</div>
            <button className="delete-favourite-city">удалить</button>
        </div>
    );
}

export default FavouriteItem;
