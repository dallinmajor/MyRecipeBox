import { SET_RECIPES } from '../actions/set_recipe_action';
import { ADD_RECIPE } from '../actions/add_recipe_action';
import _ from 'lodash';

export default function(state = {}, action) {
    console.log(action.type)
    console.log(action.payload)
    switch (action.type) {
        case SET_RECIPES:
            return _.mapKeys(action.payload, '_id')
        case ADD_RECIPE:
            const newArr = state;
            newArr[action.payload._id] = action.payload;
            return newArr;
        default:
            return state;
    }
}