import { combineReducers } from 'redux';
import { filtersReducer } from './filters.reducer';
import { resultsReducer } from './results.reducer';

export const rootReducer = combineReducers(
    {
        filters: filtersReducer,
        results: resultsReducer
    }
);
