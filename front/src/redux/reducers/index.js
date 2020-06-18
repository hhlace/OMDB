import { combineReducers } from 'redux';
import moviesReducer from './movies-reducer';
import createUserReducer from './createUser-reducer';

export default combineReducers({
    movies: moviesReducer,
    user: createUserReducer
})