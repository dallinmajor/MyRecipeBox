import { SET_RECIPES } from '../actions/recipeActions';
import _ from 'lodash';

export default function(state = [], action) {
    switch (action.type) {
        case SET_RECIPES:
            return _.mapKeys(action.payload.data, 'id')
        default:
            return state;
    }
}