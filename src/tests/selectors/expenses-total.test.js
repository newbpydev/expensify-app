import React from "react";
import { shallow } from "enzyme";
import selectExpensesTotal from "../../selectors/expenses-total";
import expenses from "../fixtures/expenses";


test("should return 0 if there is no expenses", () => {
  const total = selectExpensesTotal();
  expect(total).toBe(0);
});

test("should correctly add up a single expense", () => {
  const expense = expenses[1];
  const total = selectExpensesTotal(expense);
  expect(total).toBe(1900);
});

test("should correctly add up multiple expenses", () => {
  const total = selectExpensesTotal(expenses);
  expect(total).toBe(313598);
});