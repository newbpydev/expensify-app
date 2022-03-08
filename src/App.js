import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import configureStore from "./store/configureStore";
import { startSetExpenses, editExpense } from "./actions/expenses";
import * as filter from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";

import "./firebase/firebase"
// import "./playground/promises"

import "normalize.css/normalize.css";
import "./styles/style.scss";
import "react-dates/lib/css/_datepicker.css";

import AppRouter from "./routers/AppRouter";

const store = configureStore();


const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(
  <React.StrictMode><p>Loading...</p></React.StrictMode>,
  document.getElementById("root")
);

//* load app on success of dataset
store.dispatch(startSetExpenses()).then(() => {
  ReactDOM.render(
    <React.StrictMode>{jsx}</React.StrictMode>,
    document.getElementById("root")
  );

})

