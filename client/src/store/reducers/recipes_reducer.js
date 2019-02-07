import { SET_RECIPES } from '../actions/set_recipe_action';
import _ from 'lodash';

export default function(state = {}, action) {
    console.log(action.type)
    console.log(action.payload)
    switch (action.type) {
        case SET_RECIPES:
            return _.mapKeys(action.payload, '_id')
        default:
            return state;
    }
}