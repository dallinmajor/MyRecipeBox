export const DELETE_CATEGORY = 'DELETE_CATEGORY';

export default function deleteCategory(category) {
    
    return {
        type: DELETE_CATEGORY,
        payload: category
    }
};