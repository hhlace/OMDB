import { CREATE_USER, LOGIN_USER } from '../action-creator/constants';

const initialState = {
    userData: {},
    loggedUser: {}
};

export default (state = initialState, action) => {
    switch(action.type) {
        case CREATE_USER:
            return { ...state, userData: action.userData}
        case LOGIN_USER:
            return { ...state, loggedUser: action.loggedUser}
        default:
            return state;
    }
}