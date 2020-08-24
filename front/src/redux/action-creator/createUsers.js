import { CREATE_USER, LOGIN_USER } from './constants';
import axios from 'axios';

const createUser = usersData => {
    return {
        type: CREATE_USER,
        usersData 
    }
}
const login = loggedUser => {
    return {
        type: LOGIN_USER,
        loggedUser
    }
}



export const userCreate = user => {
    return axios.post('/api/register', user)
    .then( res => res.data )
    .then( user => {
        return dispatch( createUser(user) )
    })
}

export const loginUser =  user => dispatch => {
        return axios.post('/api/login', user)
    .then( res => {dispatch(login(res.data))}) }

export const logout = () => dispatch => {
    return axios.post('/api/logout')
    .then(dispatch(login({})))
}

