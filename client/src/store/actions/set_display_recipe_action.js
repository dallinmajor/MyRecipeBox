export const SET_DISPLAY = 'SET_DISPLAY';

export default function setRecipeDisplay(recipe) {
    console.log(recipe);
    if(recipe){
        return {
            type: SET_DISPLAY,
            payload: recipe
        }
    } else {
        return {
            type: SET_DISPLAY,
            payload: false
        }
    }
}