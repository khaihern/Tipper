const Reducer = (state, action) => {
    switch(action.type) {
        case 'SET_AMOUNT':
            return {
                ...state,
                amount: parseFloat(action.payload)
            }
        case 'SET_TIP':
            return {
                ...state,
                tip: parseInt(action.payload)
            }
        case 'SET_PARTY_SIZE':
            return {
                ...state,
                partySize: action.payload
            }
        default:
            return state;
    }
}

export default Reducer;