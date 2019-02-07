import { SET_USER } from '../actions/set_user_action';

export default (state = {}, action) => {

    switch (action.type) {
        case SET_USER:
            return action.payload
        default:
            return state
    }
}