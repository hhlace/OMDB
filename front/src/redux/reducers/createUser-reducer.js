import { LOGIN_USER, UNAVAILABLE_EMAIL } from '../action-creator/constants';

const initialState = {
    loggedUser: {},
    unavailableEmail: ''
};

export default (state = initialState, action) => {
    switch(action.type) {
        case LOGIN_USER:
            return { ...state, loggedUser: action.loggedUser}
        case UNAVAILABLE_EMAIL:
            return { ...state, unavailableEmail: action.username}
        default:
            return state;
    }
}