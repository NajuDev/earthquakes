const initialState = null;

export const resultsReducer = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case 'FETCH_RESULTS':
            return action.results;
        default:
            return state;
    }
}