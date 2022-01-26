export const coordinateRequestByName = (search) => {
    return { type : 'REQUEST_LOADING_BY_NAME', payload: {search} };
}

export const coordinateRequestByCoord = (coord) => {
    return { type : 'REQUEST_LOADING_BY_COORD', payload: {coord} };
}

export const requestErrorCitySearch = ( message ) => {
    return { type: 'REQUEST_ERROR_CITY_SEARCH', payload: {messageCity : message} };
}

export const requestErrorWeatherSearch = ( message ) => {
    return { type: 'REQUEST_ERROR_WEATHER_SEARCH', payload: {messageWeather: message} };
}

export const coordinateRequestSuccess = ( name ) => {
    return { type: 'COORDINATE_REQUEST_SUCCESS', payload: {name} };
}

export const allDataReset = () => {
    return { type: 'ALL_DATA_RESET' };
}

export const weatherRequestSuccess = (weather) => {
    console.log(weather);
    return { type: 'WEATHER_REQUEST_SUCCESS', payload: { weather } };
}