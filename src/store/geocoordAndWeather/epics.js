import { ofType } from 'redux-observable';
import { of } from 'rxjs';
import { fromFetch } from 'rxjs/fetch';
import { map, switchMap, catchError  } from 'rxjs/operators';
import { coordinateRequestError, coordinateRequestSuccess, requestErrorCitySearch, requestErrorWeatherSearch, weatherRequestSuccess } from './actions';

export const coordinateRequestByNameEpic= action$ => action$.pipe(
    ofType('REQUEST_LOADING_BY_NAME'),
    map( o => o.payload.search),
    map( o => new URLSearchParams({ address: o })),
    switchMap( o => fromFetch(`https://maps.googleapis.com/maps/api/geocode/json?${o}&key=AIzaSyAJA-0hHtmsuMj-CJlOyiPIkoGzzJBpWrE`, 
        { selector: response => response.json()}).pipe(
            map( o => {
                if (o.status === "REQUEST_DENIED") {
                    return requestErrorCitySearch('запрос отклонен');
                }
                if (o.status === "ZERO_RESULTS") {
                    return requestErrorCitySearch('По данному запросу нет городов');
                }
                const name = o.results[0].address_components[0].long_name
                return coordinateRequestSuccess(name)
            }),
            catchError( e => of(requestErrorCitySearch(e)))
            )),
)

export const coordinateRequestByCoordEpic= action$ => action$.pipe(
    ofType('REQUEST_LOADING_BY_COORD'),
    map( o => o.payload.coord),
    switchMap( o => fromFetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${o.latitude},${o.longitude}&result_type=locality&amp;key=YOUR_API_KEY&key=AIzaSyAJA-0hHtmsuMj-CJlOyiPIkoGzzJBpWrE`, 
        { selector: response => response.json()}).pipe(
            map( o => {
                if (o.status === "REQUEST_DENIED") {
                    return requestErrorCitySearch(o.error_message);
                }
                const name = o.results[0].address_components[0].long_name
                return coordinateRequestSuccess(name)
            }),
            catchError( e => of(requestErrorCitySearch(e)))
            )),
)

export const weatherRequestEpic= action$ => action$.pipe(
    ofType('COORDINATE_REQUEST_SUCCESS'),
    map( o => o.payload.name),
    switchMap( o => fromFetch(`https://api.openweathermap.org/data/2.5/weather?q=${o}&appid=3cccca9978c568002db59d4051ef23ac&lang=ru`, 
        { selector: response => response.json()}).pipe(
            map( o => {
                if (o.cod === 404) {
                    return requestErrorWeatherSearch('Погода для выбранного города не найдена')
                }
                return weatherRequestSuccess(o);
            }),
            catchError( e => of(requestErrorWeatherSearch(e)))
            )),
)