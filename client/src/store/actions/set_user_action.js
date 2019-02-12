export const SET_USER = 'SET_USER';

export default function setUser(user) {
    return {
        type: SET_USER,
        payload: user
    }
};