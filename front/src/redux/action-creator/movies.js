import { RECEIVE_MOVIES, RECEIVE_MOVIE } from './constants';
import axios from 'axios';

const receiveMovies = function (movies) {
    return {
        type: RECEIVE_MOVIES,
        movies
    }
}

const receiveMovie = function (movie) {
    return {
        type: RECEIVE_MOVIE,
        movie
    }
}

export const fetchMovies = search => dispatch => {
    return axios.get(`https://www.omdbapi.com/?apikey=20dac387&s=${search}`)
    .then( res => res.data.Search )
    .then( movies => {
        return dispatch(receiveMovies(movies))
    })
}

export const fetchMovie = imdbId => dispatch => {
    return axios.get(`https://www.omdbapi.com/?apikey=20dac387&i=${imdbId}`)
    .then( res => res.data )
    .then( movie => {
        dispatch(receiveMovie(movie))
    })
}