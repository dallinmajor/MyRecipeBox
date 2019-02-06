import axios from 'axios';

export const FETCH_CATEGORIES = 'fetch_categories';

export function fetchPosts() {
    

    return {
        type: FETCH_CATEGORIES,
        payload: request
    };
};