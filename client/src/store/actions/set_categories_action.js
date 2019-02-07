export const SET_CATEGORIES = 'SET_CATEGORIES';

export default function setCategories(arr) {
    
    return {
        type: SET_CATEGORIES,
        payload: arr
    };
};