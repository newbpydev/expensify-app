import { v4 as uuidv4 } from "uuid";
import database from "../firebase/firebase";
import {
  getDatabase,
  ref,
  set,
  update,
  remove,
  onValue,
  child,
  get,
  off,
  push,
  onChildRemoved,
  onChildChanged,
  onChildAdded,
} from "firebase/database";

//! //////////////////////////////////////////////////////////////////////////
//! ACTIONS

//* ADD_EXPENSE
export const addExpense = (expense) => ({
  type: "ADD_EXPENSE",
  expense,
});

// export const addExpense = ({
//   description = "",
//   note = "",
//   amount = 0,
//   createdAt = 0,
// } = {}) => ({
//   type: "ADD_EXPENSE",
//   expense: {
//     id: uuidv4(),
//     description,
//     note,
//     amount,
//     createdAt,
//   },
// });

/* */
//*  adding Expenses to database and Redux
export const startAddExpense = (expenseData = {}) => {
  return (dispatch, getState) => {  //! <= <= IMPORTANT: GETSTATE HAS THE ID
    const uid = getState().auth.uid //* getting user id
    const {
      description = "",
      note = "",
      amount = 0,
      createdAt = 0,
    } = expenseData;

    const expense = { description, note, amount, createdAt };

    return push(ref(database, `users/${uid}/expenses`), expense).then((ref) => {
      dispatch(
        addExpense({
          id: ref.key,
          ...expense,
        })
      );
    });
  };
};

//* REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => ({
  type: "REMOVE_EXPENSE",
  id,
});

export const startRemoveExpense = ({id} = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid
    return remove(ref(database, `users/${uid}/expenses/${id}`))
      .then(() => {
        dispatch(removeExpense({id}))
      })
      .catch((e) => console.log('delete failed. ', e))

  }
}

//* EDIT_EXPENSE
export const editExpense = (id, updates) => ({
  type: "EDIT_EXPENSE",
  id,
  updates,
});


export const startEditExpense = (id, updates) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid

    return update(ref(database, `users/${uid}/expenses/${id}`), updates).then(() => {
      dispatch(editExpense(id, updates))
    })
  }
}

//*SET_EXPENSES
export const setExpenses = (expenses) => ({
  type: "SET_EXPENSES",
  expenses,
});

export const startSetExpenses = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid
    return get(ref(database, `users/${uid}/expenses`))
      .then((snapshot) => {
        const expenses = [];

        snapshot.forEach((childSnapshot) => {
          expenses.push({
            id: childSnapshot.key,
            ...childSnapshot.val(),
          });
        });


        dispatch(setExpenses(expenses));
      })
  };
};
