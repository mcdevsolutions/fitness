// ./src/store/configureStore.js
import { createStore, applyMiddleware } from 'redux';
import { fromJS } from 'immutable';
// Import thunk middleware
import thunk from 'redux-thunk';
import createReducer from './reducers';
import { routerMiddleware } from 'react-router-redux';

export default function configureStore(initialState = {}, history) {
  // Build the middleware for intercepting and dispatching navigation actions
  const middlewares = [routerMiddleware(history), thunk];
  // If Redux DevTools Extension is installed use it, otherwise use Redux compose
  /* eslint-disable no-underscore-dangle, indent */

  const store = createStore(
    createReducer(),
    fromJS(initialState),
    applyMiddleware(...middlewares)
  );
  return store;
}
