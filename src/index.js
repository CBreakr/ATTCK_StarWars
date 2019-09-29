import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
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

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <ScrollToTop>
        <App store={store} />
      </ScrollToTop>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'));
