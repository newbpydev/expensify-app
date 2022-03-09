import {
  startAddExpense,
  addExpense,
  editExpense,
  removeExpense,
  setExpenses,
  startSetExpenses,
  startRemoveExpense,
  startEditExpense,
} from "../../actions/expenses";
import expenses from "../fixtures/expenses";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import database from "../../firebase/firebase";
import { ref, get, set } from "firebase/database";
import { create } from "react-test-renderer";

const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
  const expensesData = {};
  expenses.forEach(({ id, description, amount, note, createdAt }) => {
    expensesData[id] = { description, amount, note, createdAt };
  });
  // console.log(expensesData)
  set(ref(database, "expenses"), expensesData).then(() => done());
});

//* ////////////////////////////////////////////
//* REMOVE EXPENSES
test("should setup remove expense action object", () => {
  const action = removeExpense({ id: "123abc" });
  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: "123abc",
  });
});

test("should remove expense from firebase", (done) => {
  const store = createMockStore({});
  const id = expenses[0].id;

  store
    .dispatch(startRemoveExpense({ id }))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: "REMOVE_EXPENSE",
        id,
      });

      return get(ref(database, `expenses/${id}`));
    })
    .then((snapshot) => {
      expect(snapshot.val()).toBeFalsy();
      done();
    });
});

//* ////////////////////////////////////////////
//* EDIT EXPENSES
test("should edit an expense data item", () => {
  const action = editExpense("abc123", { description: "rent", amount: 123 });

  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: "abc123",
    updates: {
      amount: 123,
      description: "rent",
    },
  });
});

test("should edit expenses from firebase", (done) => {
  const store = createMockStore({});
  const id = expenses[0].id;
  const updates = {
    amount: 33399,
  };
  // console.log(updates); //?

  store
    .dispatch(startEditExpense(id, updates))
    .then(() => {
      const actions = store.getActions();
      console.log(actions[0]); //?
      expect(actions[0]).toEqual({
        type: "EDIT_EXPENSE",
        id,
        updates,
      });
      return get(ref(database, `expenses/${id}`));
    })
    .then((snapshot) => {
      expect(snapshot.val().amount).toBe(updates.amount); 
      done();
    });
});

//* ////////////////////////////////////////////
//* ADD EXPENSES
test("Should add an expense to data with provided values", () => {
  const action = addExpense(expenses[2]);

  expect(action).toEqual({
    expense: expenses[2],
    type: "ADD_EXPENSE",
  });
});

//! we pass "done" in the callback to then call it to wait for async data to return
// test("should add expense to database and store", (done) => {
//   const store = createMockStore({});
//   const expenseData = {
//     description: "Mouse",
//     note: "it was a horrible mouse",
//     amount: 27000,
//     createdAt: 20000,
//   };

//   store
//     .dispatch(startAddExpense(expenseData))
//     .then(() => {
//       const actions = store.getActions();

//       expect(actions[0]).toEqual({
//         type: "ADD_EXPENSE",
//         expense: {
//           id: expect.any(String),
//           ...expenseData,
//         },
//       });

//       //* checking inside the database to see if item matches
//       return get(ref(database, `expenses/${actions[0].expense.id}`));
//     })
//     .then((snapshot) => {
//       expect(snapshot.val).toEqual(expenseData)
//       done();
//     });
// });

// test("should add expense with default to database and store", (done) => {
//     const store = createMockStore({});
//     const expenseDefault = {
//       description: "",
//       note: "",
//       amount: 0,
//       createdAt: 0,
//     };

//     store
//       .dispatch(startAddExpense({}))
//       .then(() => {
//         const actions = store.getActions();

//         expect(actions[0]).toEqual({
//           type: "ADD_EXPENSE",
//           expense: {
//             id: expect.any(String),
//             ...expenseDefault,
//           },
//         });

//         //* checking inside the database to see if item matches
//         return get(ref(database, `expenses/${actions[0].expense.id}`));
//       })
//       .then((snapshot) => {
//         expect(snapshot.val()).toEqual(expenseDefault);
//         done()
//       });
// });

//* ////////////////////////////////////////////
//* SET EXPENSES
test("should setup set expense action with data", () => {
  const action = setExpenses(expenses);
  // console.log(action);
  expect(action).toEqual({
    type: "SET_EXPENSES",
    expenses,
  });
});

test("should fetch fetch the expenses from firebase", (done) => {
  const store = createMockStore({});
  store.dispatch(startSetExpenses()).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: "SET_EXPENSES",
      expenses,
    });
    done();
  });
});

//* ////////////////////////////////////////////
//* REMOVE EXPENSES

// test("Should add an expense to data with default values", () => {
//   const action = addExpense()

//   expect(action).toEqual({
//     expense: {
//       id: expect.any(String),
//       description: "",
//       note: "",
//       amount: 0,
//       createdAt: 0,
//     },
//     type: "ADD_EXPENSE",

//   })
// })
