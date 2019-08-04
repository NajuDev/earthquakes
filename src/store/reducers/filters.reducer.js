const initialState = {
    mag: undefined,
    magType: undefined
};

export const filtersReducer = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case 'SET_MAG_FILTER':
            const newMag = !(isNaN(action.value)) ? action.value : undefined;
            return {
                ...state,
                mag: newMag
            };
        case 'SET_MAGTYPE_FILTER':
            return {
                ...state,
                magType: action.value
            };
        default:
            return state;
    }
}