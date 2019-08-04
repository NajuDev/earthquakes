import { resultsReducer } from './results.reducer';

describe('default', () => {
    it('Returns the default state', () => {
        const action = {
            type: 'FOO',
        };
    
        const result = resultsReducer(undefined, action);
    
        expect(result).toBeNull();
    });
});

describe('FETCH_RESULTS', () => {
    it('Returns the results from the action', () => {
        const action = {
            type: 'FETCH_RESULTS',
            results: [{}, {}, {}]
        };
        const state = null;
    
        const result = resultsReducer(state, action);
    
        expect(result).toBe(action.results);
    });
});
