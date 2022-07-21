import React from 'react';
import Counter from './Counter';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

// reducers
import countReducer from './countReducer';
import productReducer from './productReducer';
import modalReducer from './modalReducer';
// redux thunk
import thunk from 'redux-thunk';
// get components
import Modal from './Modal';
import Products from './Products';
const middleware = [thunk];

// setup initial state

// setup reducer

// setup store
const store = createStore(
  combineReducers({
    countState: countReducer,
    modalState: modalReducer,
    productState: productReducer,
  }),

  window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__(applyMiddleware(...middleware))
);
const App = () => {
  return (
    <Provider store={store}>
      <Counter />;
      <Modal />
      <Products />
    </Provider>
  );
};

export default App;
