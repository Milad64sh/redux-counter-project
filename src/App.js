import React from 'react';
import Counter from './Counter';
import { createStore } from 'redux';
import { DECREASE, RESET, INCREASE } from './actions';
import reducer from './reducers';
import { Provider } from 'react-redux';

// setup initial state
const defaultState = {
  count: 76,
  name: 'bob',
};
// setup reducer

// setup store
const store = createStore(reducer, defaultState);
const App = () => {
  return (
    <Provider store={store}>
      <Counter />;
    </Provider>
  );
};

export default App;
