import moment from "moment"
import expensesReducer from "../../reducers/expenses"
import expenses from "../fixtures/expenses"



test("should set default state", () => {
  const state = expensesReducer(undefined, { type: "@@INIT" })
  
  expect(state).toEqual([])
})

test("should remove expense by id", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: expenses[1].id
  }
  const state = expensesReducer(expenses, action)
  
  expect(state).toEqual([
    expenses[0],
    expenses[2],
    expenses[3],
  ])

})

test("should not remove expense if id not found", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: '-1'
  }
  const state = expensesReducer(expenses, action)
  
  expect(state).toEqual(expenses)

})

test("should add an expense", () => {
  const action = {
    type: "ADD_EXPENSE",
    expense: {
      id: "5",
      description: "house",
      note: "nice expensive house",
      createdAt: moment(),
      amount: 99000
    }
  }
  const state = expensesReducer(expenses, action)
  
  expect(state).toEqual([
    ...expenses,
    action.expense
  ])

})
test("should edit an expense", () => {
  const amount = 99000
  const action = {
    type: "EDIT_EXPENSE",
    id: expenses[3].id,
    updates: {
        amount: 99000,
      },
    }
  const state = expensesReducer(expenses, action)
  
  expect(state[3].amount).toBe(amount)

})
test("should not edit expense if expense not found", () => {
  const amount = 99000;
  const action = {
    type: "EDIT_EXPENSE",
    id: "-1",
    updates: {
      amount: 99000,
    },
  };
  const state = expensesReducer(expenses, action)
  
  expect(state).toEqual(expenses)

})








