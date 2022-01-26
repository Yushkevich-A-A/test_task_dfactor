import React from 'react';
import { useSelector } from 'react-redux';
import FavouriteItem from './FavouriteItem/FavouriteItem';
import './FavouriteList.css';

function FavouriteList(props) {
  const { favouriteList } = useSelector( state => state.favouriteListReducer);

  return (
    <div className='favourite-block'>
      <h2>Избранное</h2>
        { favouriteList.length === 0 && <div className="empty-list">Список избранного пуст</div> }
        
        {
          favouriteList.map( item => <FavouriteItem key={item.id} item={item}/>)
        }
    </div>
  );
}

export default FavouriteList;
