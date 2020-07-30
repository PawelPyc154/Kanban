import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/App';
import ColorVariable from './components/context/ColorVariable';

ReactDOM.render(
  <React.StrictMode>
    <ColorVariable>
      <Router basename={process.env.PUBLIC_URL}>
        <App />
      </Router>
    </ColorVariable>
  </React.StrictMode>,
  document.getElementById('root'),
);
