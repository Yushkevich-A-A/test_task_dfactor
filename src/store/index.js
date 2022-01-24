import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { combineEpics, createEpicMiddleware } from "redux-observable";
import { coordinateRequestEpic, weatherRequestEpic } from "./geocoordAndWeather/epics";
import serviceGeocoordReducer from "./geocoordAndWeather/reducer";


const reduser = combineReducers({
    geocoordReducer: serviceGeocoordReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const epic = combineEpics(
    coordinateRequestEpic,
    weatherRequestEpic,
);

const epicMiddleware = createEpicMiddleware();
const store = createStore(reduser, composeEnhancers(
    applyMiddleware(epicMiddleware)
));

epicMiddleware.run(epic);

export default store;