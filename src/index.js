import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import reducer from "./store/reducers";
import sagas from './store/sagas';
import { legacy_createStore as createStore, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga'

const root = ReactDOM.createRoot(document.getElementById('root'));

const saga = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(saga))

saga.run(sagas);

root.render(
    <Provider store={store}>
        <App/>
    </Provider>
);
reportWebVitals();
