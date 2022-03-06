import { createStore, combineReducers } from "redux";
import { v4 as uuidv4 } from "uuid";

//! //////////////////////////////////////////////////////////////////////////
//! ACTIONS

//* ADD_EXPENSE
const addExpense = ({
  description = "",
  note = "",
  amount = 0,
  createdAt = 0,
} = {}) => ({
  type: "ADD_EXPENSE",
  expense: {
    id: uuidv4(),
    description,
    note,
    amount,
    createdAt,
  },
});

//* REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => ({
  type: "REMOVE_EXPENSE",
  id,
});

//* EDIT_EXPENSE
const editExpense = (id, updates) => ({
  type: "EDIT_EXPENSE",
  id,
  updates,
});

//* SET_TEXT_FILTER
const setTextFilter = (text = "") => ({
  type: "SET_TEXT_FILTER",
  text,
});

//* SORT_BY_DATE
const sortByDate = () => ({
  type: "SORT_BY_DATE",
});

//* SORT_BY_AMOUNT
const sortByAmount = () => ({
  type: "SORT_BY_AMOUNT",
});

//* SET_START_DATE
const setStartDate = (startDate = undefined) => ({
  type: "SET_START_DATE",
  startDate,
});

//* SET_END_DATE
const setEndDate = (endDate = undefined) => ({
  type: "SET_END_DATE",
  endDate,
});

//! //////////////////////////////////////////////////////////////////////////
//! REDUCERS

//* Expenses Reducers
const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return [...state, action.expense];
    case "REMOVE_EXPENSE":
      return state.filter(({ id }) => id !== action.id);
    case "EDIT_EXPENSE":
      return state.map((expense) => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates,
          };
        } else {
          return expense;
        }
      });
    default:
      return state;
  }
};

//* Filter Reducers
const filterReducerDefaultState = {
  text: "",
  sortBy: "date",
  startDate: undefined,
  endDate: undefined,
};
const filtersReducer = (state = filterReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_TEXT_FILTER":
      return {
        ...state,
        text: action.text,
      };
    case "SORT_BY_DATE":
      return {
        ...state,
        sortBy: "date",
      };
    case "SORT_BY_AMOUNT":
      return {
        ...state,
        sortBy: "amount",
      };
    case "SET_START_DATE":
      return {
        ...state,
        startDate: action.startDate,
      };
    case "SET_END_DATE":
      return {
        ...state,
        endDate: action.endDate,
      };
    default:
      return state;
  }
};

//! //////////////////////////////////////////////////////////////////////////
//! Store creation
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer,
  })
);

//! Timestamps (miliseconds)
//* January 1st, 1970
//* from there the positive numbs are +1970 year, negative ms are -1970 year

//! Get visible expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  console.log(text, sortBy, startDate, endDate);
  return expenses.filter((expense) => {
    // const textDescription = expense.description.toLowerCase();
    const textMatch = expense.description
      .toLowerCase()
      .includes(text.toLowerCase());

    const startDateMatch =
      typeof startDate !== "number" || expense.createdAt >= startDate;
    const endDateMatch =
      typeof endDate !== "number" || expense.createdAt <= endDate;

    return textMatch && startDateMatch && endDateMatch;
  }).sort((a, b) => {                           //! <- Sorting algorithm
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1;
    } else if (sortBy === 'amount') {
      return a.amount < b.amount ? 1 : -1;
    }
  });
};

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

  console.log(visibleExpenses);
});
const expenseOne = store.dispatch(
  addExpense({ description: "rent", amount: 100, createdAt: 100 })
);
const expenseTwo = store.dispatch(
  addExpense({ description: "coffee", amount: 10500, createdAt: -100 })
);
const expenseThree = store.dispatch(
  addExpense({ description: "laptop", amount: 10100, createdAt: -900 })
);

// console.log(expenseOne, expenseTwo, expenseThree);
// store.dispatch(removeExpense({ id: expenseOne.expense.id }));
// store.dispatch(
//   editExpense(expenseTwo.expense.id, { description: "testing", amount: 10800 })
// );

// store.dispatch(setTextFilter("rent"));
// store.dispatch(setTextFilter());

store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(-1000));
// store.dispatch(setStartDate())
// store.dispatch(setEndDate(1000));
// store.dispatch(setEndDate())

//! //////////////////////////////////////////////////////////////////////////
//!
const demoState = {
  expenses: [
    {
      id: "ajkklfjsdf",
      description: "January Rent",
      not: "This was the final payment for that address.",
      amount: 55400,
      createdAt: 0,
    },
  ],
  filters: {
    text: "rent",
    sortBy: "amount", //date or amount
    startDate: undefined,
    endDate: undefined,
  },
};
