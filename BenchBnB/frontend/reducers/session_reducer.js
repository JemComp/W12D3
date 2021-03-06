import { LOGOUT_CURRENT_USER, RECEIVE_CURRENT_USER } from "../actions/sessions_actions";


const sessionReducer = (state={id: null}, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, {id: action.user.id})
        case LOGOUT_CURRENT_USER:
            return Object.assign({}, state, {id: null})
        default:
            return state;
    }
}

export default sessionReducer;