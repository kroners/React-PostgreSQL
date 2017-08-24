import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import configureStore from './store/store';
import App from './containers/App';
import {Provider} from 'react-redux';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
