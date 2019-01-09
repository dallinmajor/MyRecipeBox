export function setUser(user) {
    console.log(user);

    if(user) {
        return {
            type: 'SET_USER',
            payload: user
        }
    } else {
        return {
            type: 'NO_RESULTS'
        }
    }
}