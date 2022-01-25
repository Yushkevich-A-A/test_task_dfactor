export const addFavouriteItem = ( item ) => {
    return { type: 'ADD_FAVOURITE_ITEM', payload: {item}}
}

export const removeFavouriteItem = ( id ) => {
    return { type: 'REMOVE_FAVOURITE_ITEM', payload: {id}};
}