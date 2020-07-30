import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import ColorVariable from './components/context/ColorVariable';
import App from './components/App';
import allReducers from './state/allReducers';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(allReducers, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ColorVariable>
        <Router basename={process.env.PUBLIC_URL}>
          <App />
        </Router>
      </ColorVariable>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
