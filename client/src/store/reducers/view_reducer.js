export default (state = null, action) => {

    switch (action.type) {
        case 'SET_VIEW':
            return action.payload
            // eslint-disable-next-line
            break;
        default:
            return state
    }
}