const initialState = {
    coord: null,
    weather: null,
    search: '',
    loading: false,
    errorCitySearch: null,
    errorWeatherSearch: null,
}

const serviceGeocoordReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'REQUEST_LOADING_BY_NAME': 
            const { search } = action.payload;
            return {...state, loading: true, errorCitySearch: null, errorWeatherSearch: null, search};
        case 'REQUEST_LOADING_BY_COORD': 
            return {...state, errorCitySearch: null, errorWeatherSearch: null, };
        case 'REQUEST_ERROR_CITY_SEARCH':
            const { messageCity } = action.payload;
            return {...state, loading: false, errorCitySearch: messageCity, errorWeatherSearch: null,};
        case 'REQUEST_ERROR_WEATHER_SEARCH':
            const { messageWeather } = action.payload;
            return {...state, loading: false, errorWeatherSearch: messageWeather, errorCitySearch: null};
        case 'COORDINATE_REQUEST_SUCCESS': 
            const { coord } = action.payload;
            return {...state, loading: true, coord, errorCitySearch: null, errorWeatherSearch: null};
        case 'WEATHER_REQUEST_SUCCESS': 
            const { weather } = action.payload;
            return {...state, weather, loading: false, errorCitySearch: null, errorWeatherSearch: null, search: ''};
        case 'ALL_DATA_RESET':
            return {...initialState};
        default: 
            return {...state};
    }
}

export default serviceGeocoordReducer;