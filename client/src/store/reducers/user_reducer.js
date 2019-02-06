export default (state = {}, action) => {

    console.log(state);
    switch (action.type) {
        case 'SET_USER':
            return action.payload
        default:
            return state
    }
}