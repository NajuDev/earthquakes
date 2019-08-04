import { createStore } from 'redux';
import { rootReducer } from './reducers/root.reducer';

export const Store = createStore(rootReducer);
