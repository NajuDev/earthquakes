import React from 'react';
import './App.css';

import { Store } from './store/index';

import { Provider } from 'react-redux';

import FilterUI from './components/filter-ui/filter-ui.container';
import Results from './components/results/results.container';

function App() {
  return (
    <div>
      <Provider store={Store}>
        <h1>Earthquakes</h1>
        <FilterUI />
        <Results />
      </Provider>
    </div>
  );
}

export default App;
