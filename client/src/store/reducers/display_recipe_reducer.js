import { SET_DISPLAY } from '../actions/set_display_recipe_action';

export default function(state = false, action) {

    switch(action.type) {
        case SET_DISPLAY:
            return action.payload
        default:
            return state
    }
}