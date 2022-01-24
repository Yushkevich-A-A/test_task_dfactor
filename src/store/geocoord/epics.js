import { ofType } from 'redux-observable';
import { of } from 'rxjs';
import { fromFetch } from 'rxjs/fetch';
import { map, switchMap, catchError  } from 'rxjs/operators';
import { coordinateRequestError, coordinateRequestSuccess } from './actions';

export const coordinateRequestEpic= action$ => action$.pipe(
    ofType('COORDINATE_REQUEST_SEARCH'),
    map( o => o.payload.search),
    map( o => new URLSearchParams({ address: o })),
    switchMap( o => fromFetch(`https://maps.googleapis.com/maps/api/geocode/json?${o}&key=AIzaSyAJA-0hHtmsuMj-CJlOyiPIkoGzzJBpWrE`, 
        { selector: response => response.json()}).pipe(
            map( o => {
                if (o.status === "REQUEST_DENIED") {
                    return coordinateRequestError(o.error_message);
                }
                return coordinateRequestSuccess(o)
            }),
            catchError( e => of(coordinateRequestError(e)))
            )),
)