import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'font-awesome/css/font-awesome.min.css';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux'
import rootReducer from './reducers/rootReducer'
import thunk from 'redux-thunk'

// const store = createStore(rootReducer);

const middleware = [thunk];


const store = createStore(rootReducer, compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  
  ));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
