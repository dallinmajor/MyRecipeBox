import { SET_CATEGORIES } from '../actions/set_categories_action';
import { ADD_CATEGORY } from '../actions/add_category_action';

export default (state = [], action) => {

    switch (action.type) {
        case SET_CATEGORIES:
            return action.payload
    case ADD_CATEGORY:
            return [[action.payload], ...state];
        default:
            return state
    }
}