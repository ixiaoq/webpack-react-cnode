import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux';

const loggerMiddleware = createLogger();

import home from 'reducers/home';

const reducers = combineReducers({
    home
});


const store = createStore(
    reducers,
    applyMiddleware(thunkMiddleware, loggerMiddleware)
);

export default store;