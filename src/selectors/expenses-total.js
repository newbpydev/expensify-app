// import expenses from "../tests/fixtures/expenses";
import moment from "moment";


export default (expenses = []) => {
  // if (expenses.length === 0) return 0;
  if (expenses.amount || expenses.amount === 0) return expenses.amount;

  return expenses
    .map((expense) => expense.amount)
    .reduce((prevAmount, currentValue) => prevAmount + currentValue, 0);
}

