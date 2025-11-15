/* eslint-disable react/react-in-jsx-scope */

import { createRoot } from 'react-dom/client';
import './styles/index.css';
import App from './App.jsx';
import { HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/index.js';

createRoot(document.getElementById('root')).render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>
);
