import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from 'reducers';
import logger from 'redux-logger';
import reduxPromise from 'redux-promise';

const middlewares = [logger, reduxPromise]

const Root = ({ children, initialState = {} }) => (
  <Provider store={ createStore(reducers, initialState, applyMiddleware(...middlewares)) }>
    { children }
  </Provider>
);

export default Root;
