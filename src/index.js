import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";

import { createStore } from "redux";
import { Provider } from "react-redux";

import App from './App';
import rootReducer from "./Reducers/RootReducer";

import ScrollToTop from "./Components/ScrollToTopComponent";

const store = createStore(rootReducer,
  {},
window.__REDUX_DEVTOOLS_EXTENSION__ &&
window.__REDUX_DEVTOOLS_EXTENSION__());

const routerBaseName = "https://CBreakr.github.io/ATTCK_StarWars/";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter basename={routerBaseName}>
      <ScrollToTop>
        <App store={store} />
      </ScrollToTop>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'));
