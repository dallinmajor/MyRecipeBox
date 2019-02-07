import { SET_CATEGORIES } from '../actions/set_categories_action';

export default (state = [], action) => {

    switch (action.type) {
        case SET_CATEGORIES:
            return action.payload
        default:
            return state
    }
}