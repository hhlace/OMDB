import { RECEIVE_MOVIES, RECEIVE_MOVIE } from '../action-creator/constants';

const initialState = {
    movies: [],
    movie: {}
};

const movieReducer = (state = initialState, action) => {
    switch(action.type) {
        case RECEIVE_MOVIES:
            return { ...state, movies: action.movies};
        case RECEIVE_MOVIE:
            return {...state, movie: action.movie}
        default:
            return state;
    }
}

export default movieReducer;