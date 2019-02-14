export const DELETE_RECIPE = 'DELETE_RECIPE';

export default function deleteRecipe(id) {
    
    return {
        type: DELETE_RECIPE,
        payload: id
    }
};