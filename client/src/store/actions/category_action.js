export const SET_CATEGORIES = 'set_categories';

export function setCategories(arr) {
    
    return {
        type: SET_CATEGORIES,
        payload: arr
    };
};