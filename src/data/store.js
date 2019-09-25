// create store passing it reducer and the intial state which updates the state
import { createStore } from 'redux';

import reducer from './reducer';
import initial from './initial';

const store = createStore(
    reducer, 
    initial, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),

);

export default store;