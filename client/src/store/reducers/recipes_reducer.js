import { SET_RECIPES } from '../actions/set_recipe_action';
import { ADD_RECIPE } from '../actions/add_recipe_action';
import { DELETE_RECIPE } from '../actions/delete_recipe_action';
import _ from 'lodash';

export default function(state = {}, action) {

    switch (action.type) {
        case SET_RECIPES:
            return _.mapKeys(action.payload, '_id')
        case ADD_RECIPE:
            let newList = Object.assign({}, state);

            newList[action.payload._id] = action.payload;
            
            return newList;
        case DELETE_RECIPE:
            let deleteList = Object.assign({}, state);

            delete deleteList[action.payload];

            return deleteList;
        default:
            return state;
    }
}