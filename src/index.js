import React from 'react';
import {ReactDOM, render} from 'react-dom';
import './index.css';
import App from './app/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router } from 'react-router-dom';

import { Provider } from 'react-redux';
import configureStore from './redux/store/configureStore';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
    <Router>
        <App />
    </Router>
    </Provider>, 
    document.getElementById('root')
);

registerServiceWorker();