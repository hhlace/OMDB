import { LOGIN_USER, ADD_FAV, DELETE_FAV } from '../action-creator/constants';

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
            return {...state, loggedUser: updated };
        case DELETE_FAV:
            let newFavs = state.loggedUser.favs.filter( fav => action.favId !== fav);
            let updatedF = state.loggedUser;
            updatedF.favs = newFavs;
            return {...state, loggedUser: updatedF };
        default:
            return state;
    }
}