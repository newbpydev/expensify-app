import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import configureStore from "./store/configureStore";
import { addExpense, editExpense } from "./actions/expenses";
import * as filter from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";

import "normalize.css/normalize.css";
import "./styles/style.scss";
import "react-dates/lib/css/_datepicker.css";

import AppRouter from "./routers/AppRouter";

const store = configureStore();
console.log(store.getState());

store.dispatch(
  addExpense({
    description: "Water bill",
    createdAt: 300,
    amount: 50000,
    note: "This is a test note for water bill",
  })
);
store.dispatch(
  addExpense({
    description: "Gas bill",
    createdAt: 600,
    amount: 90704,
    note: "the gas is getting more expensive",
  })
);
store.dispatch(
  addExpense({
    description: "Rent bill",
    createdAt: 900,
    amount: 190704,
    note: "the gas is getting more expensive",
  })
);
store.dispatch(
  addExpense({
    description: "Car Lease",
    createdAt: -100,
    amount: 250704,
    note: "the gas is getting more expensive",
  })
);
// store.dispatch(filter.setTextFilter("bill"))

// setTimeout(() => {
//   store.dispatch(filter.setTextFilter("water"))

// }, 3000)

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
// console.log(visibleExpenses)

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(
  <React.StrictMode>{jsx}</React.StrictMode>,
  document.getElementById("root")
);
