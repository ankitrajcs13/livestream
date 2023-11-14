import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import reduxThunk from 'redux-thunk'; // If needed

import App from './components/App';
import reducers from './reducers';

const store = configureStore({
  reducer: reducers,
  middleware: [reduxThunk], // Add middleware if needed
  devTools: process.env.NODE_ENV !== 'production', // Enable DevTools in development
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);
