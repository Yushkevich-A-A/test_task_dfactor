const initialState = {
    favouriteList: JSON.parse(localStorage.getItem('favouriteList')) || [],
}

console.log(JSON.parse(localStorage.getItem('favouriteList')))

const serviceFavouriteListReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_FAVOURITE_ITEM': 
            const { item } = action.payload;
            const newListAdding = [...state.favouriteList, item];
            localStorage.setItem('favouriteList', JSON.stringify(newListAdding));
            return {...state, favouriteList: [...newListAdding] };
        case 'REMOVE_FAVOURITE_ITEM':
            const { id } = action.payload;
            const newListRemoving = state.favouriteList.filter( item => item.id !== id);
            localStorage.setItem('favouriteList', JSON.stringify(newListRemoving));
            return {...state, favouriteList: [...newListRemoving] };
        default: 
            return {...state};
    }
}

export default serviceFavouriteListReducer;