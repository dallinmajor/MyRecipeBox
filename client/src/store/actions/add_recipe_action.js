export const ADD_RECIPE = 'ADD_RECIPES';

export default function addRecipe(recipes) {
    
    return {
        type: ADD_RECIPE,
        payload: recipes
    }
};