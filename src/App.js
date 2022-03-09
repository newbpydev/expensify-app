import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import configureStore from "./store/configureStore";
import { startSetExpenses, editExpense } from "./actions/expenses";
import * as filter from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";

import "./firebase/firebase"
import { getAuth } from "firebase/auth";

import "normalize.css/normalize.css";
import "./styles/style.scss";
import "react-dates/lib/css/_datepicker.css";

import AppRouter from "./routers/AppRouter";
import {
  useNavigate,
  Navigate,
  unstable_HistoryRouter as HistoryRouter,
} from "react-router-dom";
import { createBrowserHistory } from "history";

const history = createBrowserHistory({ window });

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

getAuth().onAuthStateChanged((user) => {
  if (user) {
    console.log("logged in")
  } else {
    console.log("logged out")
    // <Navigate to={"/"} />;
  }
})

