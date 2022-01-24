import { ofType } from 'redux-observable';
import { of } from 'rxjs';
import { fromFetch } from 'rxjs/fetch';
import { map, switchMap, catchError  } from 'rxjs/operators';
import { coordinateRequestError, coordinateRequestSuccess, weatherRequestSuccess } from './actions';

export const coordinateRequestEpic= action$ => action$.pipe(
    ofType('REQUEST_LOADING'),
    map( o => o.payload.search),
    map( o => new URLSearchParams({ address: o })),
    switchMap( o => fromFetch(`https://maps.googleapis.com/maps/api/geocode/json?${o}&key=AIzaSyAJA-0hHtmsuMj-CJlOyiPIkoGzzJBpWrE`, 
        { selector: response => response.json()}).pipe(
            map( o => {
                if (o.status === "REQUEST_DENIED") {
                    return coordinateRequestError(o.error_message);
                }
                const coord = o.results[0].geometry.location
                return coordinateRequestSuccess(coord)
            }),
            catchError( e => of(coordinateRequestError(e)))
            )),
)

export const weatherRequestEpic= action$ => action$.pipe(
    ofType('COORDINATE_REQUEST_SUCCESS'),
    map( o => o.payload.coord),
    switchMap( o => fromFetch(`https://api.openweathermap.org/data/2.5/weather?lat=${o.lat}&lon=${o.lng}&appid=3cccca9978c568002db59d4051ef23ac&lang=ru`, 
        { selector: response => response.json()}).pipe(
            map( o => weatherRequestSuccess(o)),
            catchError( e => of(coordinateRequestError(e)))
            )),
)