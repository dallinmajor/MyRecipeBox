export const SET_RECIPES = 'SET_RECIPES';

export default function setRecipe(recipes) {
    
    return {
        type: SET_RECIPES,
        payload: recipes
    }
};