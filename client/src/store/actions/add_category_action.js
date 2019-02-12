export const ADD_CATEGORY = 'ADD_CATEGORY';

export default function addCategory(category) {
    
    return {
        type: ADD_CATEGORY,
        payload: category
    }
};