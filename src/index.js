import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import StoreProvider from './store';
import App from './modules/App';

ReactDOM.render(
  <StoreProvider>
    <App />
  </StoreProvider>,
  document.getElementById('root'),
);
