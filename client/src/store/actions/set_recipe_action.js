export const SET_RECIPES = 'SET_RECIPES';

export default function setRecipe(recipes) {
    console.log(recipes)
    return {
        type: SET_RECIPES,
        payload: recipes
    }
};