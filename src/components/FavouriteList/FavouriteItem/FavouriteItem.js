import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeFavouriteItem } from '../../../store/favourites/actions';
import { coordinateRequestSuccess } from '../../../store/geocoordAndWeather/actions';
import ButtonDelete from '../../Buttons/ButtonDelete/ButtonDelete';
import './FavouriteItem.css';

function FavouriteItem(props) {
    const { item } = props;
    const dispatch = useDispatch();

    const handleClicRemove = () => {
        dispatch(removeFavouriteItem(item.id))
    }

    const handleClickLoading = () => {
        dispatch(coordinateRequestSuccess(item.name))
    }

    return (
        <div className='favourite-item'>
            <div className="favourite-city-name" onClick={handleClickLoading}>{item.name}</div>
            <ButtonDelete handleClicRemove={handleClicRemove} />
        </div>
    );
}

FavouriteItem.propTypes = {
    item: PropTypes.object,
  };

export default FavouriteItem;
