import React from 'react';
import Counter from './Counter';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

// reducers
import countReducer from './countReducer';
import productReducer from './productReducer';
import modalReducer from './modalReducer';
// get components
import Modal from './Modal';

// setup initial state

// setup reducer

// setup store
const store = createStore(
  combineReducers({
    countState: countReducer,
    modalState: modalReducer,
    productState: productReducer,
  }),

  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
const App = () => {
  return (
    <Provider store={store}>
      <Counter />;
      <Modal />
    </Provider>
  );
};

export default App;
