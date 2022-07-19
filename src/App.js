import React from 'react';
import Counter from './Counter';
import { createStore } from 'redux';
import { DECREASE, RESET, INCREASE } from './actions';
import reducer from './reducers';

// setup initial state
const defaultState = {
  count: 76,
  name: 'bob',
};
// setup reducer

// setup store
const store = createStore(reducer, defaultState);
store.dispatch({ type: RESET });
store.dispatch({ type: DECREASE });
store.dispatch({ type: INCREASE });
const App = () => {
  return <Counter state={store.getState()} />;
};

export default App;
