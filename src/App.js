import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import configureStore from "./store/configureStore";
import { startSetExpenses, editExpense } from "./actions/expenses";
import * as filter from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";

import "./firebase/firebase";
import { getAuth } from "firebase/auth";

import "normalize.css/normalize.css";
import "./styles/style.scss";
import "react-dates/lib/css/_datepicker.css";

import AppRouter, { history } from "./routers/AppRouter";

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(
  <React.StrictMode>
    <p>Loading...</p>
  </React.StrictMode>,
  document.getElementById("root")
);

//* this will let the app render only once
let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(
      <React.StrictMode>{jsx}</React.StrictMode>,
      document.getElementById("root")
    );
    hasRendered = true;
  }
};

getAuth().onAuthStateChanged((user) => {
  if (user) {
    //* load app on success of dataset
    store.dispatch(startSetExpenses()).then(() => {
      renderApp();

      if (history.location.pathname === "/") {
        history.push("/dashboard");
      }
    });
  } else {
    renderApp();
    history.push("/");
  }
});
