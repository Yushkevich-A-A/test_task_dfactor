export const coordinateRequestSearch = (search) => {
    return { type : 'REQUEST_LOADING', payload: {search} };
}

export const coordinateRequestError = ( message ) => {
    return { type: 'REQUEST_ERROR', payload: {message} };
}

export const coordinateRequestSuccess = ( coord ) => {
    return { type: 'COORDINATE_REQUEST_SUCCESS', payload: {coord} };
}

export const allDataReset = () => {
    return { type: 'ALL_DATA_RESET' };
}

export const weatherRequestSuccess = (weather) => {
    console.log(weather);
    return { type: 'WEATHER_REQUEST_SUCCESS', payload: { weather } };
}