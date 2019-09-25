import React from 'react';
import ReactDOM from 'react-dom';

// Wrap React app with Redux store 
import App from './components/App';
import store from './data/store';
import { Provider } from 'react-redux';

ReactDOM.render(
    <Provider store={ store }>
        <App />
    </Provider>, 
    document.getElementById('root')
);
