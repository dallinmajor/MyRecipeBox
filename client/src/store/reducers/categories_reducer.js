import { SET_CATEGORIES } from '../actions/set_categories_action';
import { ADD_CATEGORY } from '../actions/add_category_action';
import { DELETE_CATEGORY } from '../actions/delete_category_action';

export default (state = [], action) => {

    switch (action.type) {
        case SET_CATEGORIES:

            const categoryObj = action.payload.reduce((acc, category) => {
                acc[category] = category;
                return acc;
            }, {});
            return categoryObj;
        case ADD_CATEGORY:
            const newList = Object.assign({}, state);
            newList[action.payload] = action.payload;
            return newList;
        case DELETE_CATEGORY:
            const deleteList = Object.assign({}, state);
            delete deleteList[action.payload];
            return deleteList;
        default:
            return state
    }
}