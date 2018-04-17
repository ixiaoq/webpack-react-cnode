import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { selectSubreddit, fetchPosts } from '../actions/home';

const loggerMiddleware = createLogger();

import home from './home';

const reducers = combineReducers({
    home
});


const store = createStore(
    reducers,
    applyMiddleware(thunkMiddleware, loggerMiddleware)
);

export default store;