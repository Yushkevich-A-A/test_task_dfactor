import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { combineEpics, createEpicMiddleware } from "redux-observable";
import serviceFavouriteListReducer from "./favourites/reduser";
import { coordinateRequestByCoordEpic, coordinateRequestByNameEpic, weatherRequestEpic } from "./geocoordAndWeather/epics";
import serviceGeocoordReducer from "./geocoordAndWeather/reducer";


const reduser = combineReducers({
    geocoordReducer: serviceGeocoordReducer,
    favouriteListReducer: serviceFavouriteListReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const epic = combineEpics(
    coordinateRequestByNameEpic,
    weatherRequestEpic,
    coordinateRequestByCoordEpic,
);

const epicMiddleware = createEpicMiddleware();
const store = createStore(reduser, composeEnhancers(
    applyMiddleware(epicMiddleware)
));

epicMiddleware.run(epic);

export default store;