import { addExpense, editExpense, removeExpense } from "../../actions/expenses";

test('should remove an expense data', () => { 
  const action = removeExpense({ id: "123abc" })
  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: "123abc"
  })
})
 
test("should edit an expense data item", () => {
  const action = editExpense("abc123", {description: "rent", amount: 123}
  )
  
  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: "abc123",
    updates: {
      amount: 123,
      description: "rent"
    }
  })
})

test("Should add an expense to data", () => {
  const expenseData = {
    description: "rent bill",
    note: "it is expensive",
    amount: 1234,
    createdAt: 600,
  };
  const action = addExpense(expenseData)
  
  expect(action).toEqual({
    expense: {
      ...expenseData,
      id: expect.any(String),
      
    },
    type: "ADD_EXPENSE",
  });
})
test("Should add an expense to data with default values", () => {
  const action = addExpense()
  
  expect(action).toEqual({
    expense: {
      id: expect.any(String),
      description: "",
      note: "",
      amount: 0,
      createdAt: 0,
    },
    type: "ADD_EXPENSE",
    
  })
})