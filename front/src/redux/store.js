import { createStore, applyMiddleware } from 'redux';
import combinedReducers from '../redux/reducers/index';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

const store = createStore(combinedReducers, applyMiddleware(createLogger(), thunkMiddleware));

export default store;