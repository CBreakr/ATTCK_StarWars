import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, HashRouter } from "react-router-dom";

import { createStore } from "redux";
import { Provider } from "react-redux";

import App from './App';
import rootReducer from "./Reducers/RootReducer";

import ScrollToTop from "./Components/ScrollToTopComponent";

const store = createStore(rootReducer,
  {},
window.__REDUX_DEVTOOLS_EXTENSION__ &&
window.__REDUX_DEVTOOLS_EXTENSION__());

const routerBaseName = "/ATTCK_StarWars";

// <BrowserRouter basename={routerBaseName}>

ReactDOM.render(
  <Provider store={store}>
    <HashRouter basename="/">
      <ScrollToTop>
        <App store={store} />
      </ScrollToTop>
    </HashRouter>
  </Provider>,
  document.getElementById('root'));
