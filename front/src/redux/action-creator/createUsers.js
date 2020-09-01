import {  LOGIN_USER, UNAVAILABLE_EMAIL } from './constants';
import axios from 'axios';

const login = loggedUser => {
    return {
        type: LOGIN_USER,
        loggedUser
    }
}

const unavailableEmail = username => {
    return {
        type: UNAVAILABLE_EMAIL,
        username
    }
}

export const userCreate = user => dispatch => {
    return axios.post('/register', user)
    .then( res => res.data )
    .then( user => {
        return dispatch( login(user) )
    })
}

export const checkAvailabilty = username => dispatch => {
    return axios.post(`/register/check/${username}`)
    .then(res => {
        if (res.status == 409) dispatch(unavailableEmail(username))
    })
}

export const loginUser =  user => dispatch => {
        return axios.post('/api/login', user)
    .then( res => {dispatch(login(res.data))}) }

export const logout = () => dispatch => {
    return axios.post('/api/logout')
    .then(dispatch(login({})))
}

