import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './Redux_Store/Reducer/rootReducers';
import './index.css';
import App from './App';

import { watchStreamCreation } from './Redux_Store/Sagas';

import createSagaMiddleware from 'redux-saga';
const sagaMiddleware = createSagaMiddleware();
const componseEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, {}, componseEnhancers(applyMiddleware(sagaMiddleware)))
sagaMiddleware.run(watchStreamCreation)


ReactDOM.render(
<Provider store = {store}>
    <App />
</Provider>, document.getElementById('root'));


