import {  LOGIN_USER, ADD_FAV } from './constants';
import axios from 'axios';

const login = loggedUser => {
    return {
        type: LOGIN_USER,
        loggedUser
    }
}

const addFav = favId => {
    return {
        type: ADD_FAV,
        favId
    }
}

export const userCreate = user => dispatch => {
    return axios.post('/register', user)
    .then( res => res.data )
    .then( user => {
        return dispatch( login(user) )
    })
}

export const loginUser =  user => dispatch => {
    return axios.post('/login', user)
    .then( res => { dispatch(login(res.data)) })
    .then( )
}

export const logout = () => dispatch => {
    return axios.post('/logout')
    .then(dispatch(login({})))
}

export const addToFav = (toFav) => dispatch => {
    return axios.post('/addFav', toFav)
    .then( res => res.data )
    .then( fav => dispatch( addFav(fav) ) )
}