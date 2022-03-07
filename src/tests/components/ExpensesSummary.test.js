import React from "react";
import { shallow } from "enzyme";
import { ExpensesSummary } from "../../components/ExpensesSummary";
import expenses from "../fixtures/expenses";

test("should correctly render expensesSummary with 1 expense", () => {
  const wrapper = shallow(
    <ExpensesSummary expensesCount={1} expensesTotal={123} />
  );
  expect(wrapper).toMatchSnapshot();
});

test("should correctly render expensesSummary with multiple expenses", () => {
  const wrapper = shallow(
    <ExpensesSummary expensesCount={23} expensesTotal={245563} />
  );
  expect(wrapper).toMatchSnapshot();
});
