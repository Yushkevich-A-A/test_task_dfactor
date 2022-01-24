export const coordinateRequestSearch = (search) => {
    return { type : 'COORDINATE_REQUEST_SEARCH', payload: {search} };
}

export const coordinateRequestError = ( message ) => {
    console.log(message)
    return { type: 'COORDINATE_REQUEST_ERROR', payload: {message} };
}

export const coordinateRequestSuccess = ( data ) => {
    return { type: 'COORDINATE_REQUEST_ERROR', payload: {data} };
}

export const coordinatedataReset = () => {
    return { type: 'COORDINATE_REQUEST_ERROR' };
}