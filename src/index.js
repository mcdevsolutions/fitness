import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App/App';
import registerServiceWorker from './registerServiceWorker';

import configureStore from './configureStore';
import { Provider } from 'react-redux';

import createHistory from 'history/createBrowserHistory';

import { ConnectedRouter } from 'react-router-redux';

import reducers from './reducers'; // Or wherever you keep your reducers

// Create a history of your choosing (we're using a browser history in this case)
const initialState = {};
const history = createHistory();
const store = configureStore(initialState, history);

// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating

ReactDOM.render(
  <Provider store={store}>
    {/* ConnectedRouter will use the store from Provider automatically */}
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,

  document.getElementById('root')
);
registerServiceWorker();
