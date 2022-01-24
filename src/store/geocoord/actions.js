export const coordinateRequest = () => {
    return {type : 'COORDINATE_REQUEST'};
}

export const coordinateRequestError = ( message ) => {
    return {type: 'COORDINATE_REQUEST_ERROR', payload: {message} }
}

export const coordinateRequestSuccess = ( data ) => {
    return {type: 'COORDINATE_REQUEST_ERROR', payload: {data} }
}

export const coordinatedataReset = () => {
    return {type: 'COORDINATE_REQUEST_ERROR', payload: {data} }
}