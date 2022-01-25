import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFavouriteItem } from '../../../store/favourites/actions';
import './FavouriteItem.css';

function FavouriteItem(props) {
    const { item } = props;
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(removeFavouriteItem(item.id))
    }

    return (
        <div className='favourite-item'>
            <div className="favourite-city-name">{item.name}</div>
            <button onClick={handleClick} className="delete-favourite-city">удалить</button>
        </div>
    );
}

export default FavouriteItem;
