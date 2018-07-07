import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import configureStore from './store/configureStore';
import 'babel-polyfill';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// Can pass InitialState from the server to override custom initial state on reducers.
const store = configureStore();

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);
