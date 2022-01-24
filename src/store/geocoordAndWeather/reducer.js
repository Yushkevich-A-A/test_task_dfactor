const initialState = {
    coord: null,
    weather: null,
    search: '',
    loading: false,
    error: null,
}

const serviceGeocoordReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'REQUEST_LOADING': 
            const { search } = action.payload;
            return {...state, loading: true, error: null, search};
        case 'REQUEST_ERROR':
            const { message } = action.payload;
            return {...state, loading: false, error: message};
        case 'COORDINATE_REQUEST_SUCCESS': 
            const { coord } = action.payload;
            return {...state, loading: true, coord};
        case 'WEATHER_REQUEST_SUCCESS': 
            const { weather } = action.payload;
            return {...state, weather};
        case 'ALL_DATA_RESET':
            return {...initialState};
        default: 
            return {...state};
    }
}

export default serviceGeocoordReducer;