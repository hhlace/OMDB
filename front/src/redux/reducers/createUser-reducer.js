import { LOGIN_USER, ADD_FAV } from '../action-creator/constants';

const initialState = {
    loggedUser: {}
};

export default (state = initialState, action) => {
    switch(action.type) {
        case LOGIN_USER:
            return { ...state, loggedUser: action.loggedUser};
        case ADD_FAV:
            let updatedUser = state.loggedUser;
            updatedUser.favs = updatedUser.favs, action.favId;
            console.log('reducer', updatedUser)
            return {...state, loggedUser: updatedUser }
        default:
            return state;
    }
}