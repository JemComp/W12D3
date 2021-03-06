import { RECEIVE_CURRENT_USER, RECEIVE_SESSION_ERRORS } from "../actions/sessions_actions";

const sessionErrorsReducer = (state=[], action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_SESSION_ERRORS:
            // console.log("TEXT", action.errors);
            return [...action.errors.responseJSON];
        case RECEIVE_CURRENT_USER:
            return [];
    
        default:
            return state;
    }
}

export default sessionErrorsReducer;