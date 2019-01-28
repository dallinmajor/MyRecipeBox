export default function setRecipe(recipe) {
    console.log(recipe);

    if(recipe) {
        return {
            type: 'SET_RECIPE',
            payload: recipe
        }
    } else {
        return {
            type: 'NO_RESULTS'
        }
    }
}