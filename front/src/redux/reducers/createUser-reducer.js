import { LOGIN_USER, ADD_FAV } from '../action-creator/constants';

const initialState = {
    loggedUser: {}
};

export default (state = initialState, action) => {
    switch(action.type) {
        case LOGIN_USER:
            return { ...state, loggedUser: action.loggedUser};
        case ADD_FAV:
            let favs = state.loggedUser.favs
            let updated = state.loggedUser;
            updated.favs = [...favs, action.favId]
            return {...state, loggedUser: updated }
        default:
            return state;
    }
}