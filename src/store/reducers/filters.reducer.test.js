import { filtersReducer } from "./filters.reducer";

describe('default', () => {
    it('Returns the default state', () => {
        const action = {
            type: 'FOO'
        };

        const result = filtersReducer(undefined, action);

        expect(result).toEqual(
            {
                mag: undefined,
                magType: undefined
            }
        );
    });
});

describe('SET_MAG_FILTER', () => {
    it('Returns state with the supplied mag filter', () => {
        const action = {
            type: 'SET_MAG_FILTER',
            value: 1.1
        };
        const state = {
            mag: undefined,
            magType: undefined
        };

        const result = filtersReducer(state, action);

        expect(result).toEqual(
            {
                mag: 1.1,
                magType: undefined
            }
        );
    });

    it('Returns state with the undefined mag if supplied with NaN value', () => {
        const action = {
            type: 'SET_MAG_FILTER',
            value: NaN
        };
        const state = {
            mag: undefined,
            magType: undefined
        };

        const result = filtersReducer(state, action);

        expect(result).toEqual(
            {
                mag: undefined,
                magType: undefined
            }
        );
    });
});

describe('SET_MAGTYPE_FILTER', () => {
    it('Returns state with the supplied magType filter', () => {
        const action = {
            type: 'SET_MAGTYPE_FILTER',
            value: 'ml'
        };
        const state = {
            mag: undefined,
            magType: undefined
        };

        const result = filtersReducer(state, action);

        expect(result).toEqual(
            {
                mag: undefined,
                magType: 'ml'
            }
        );
    });
});
