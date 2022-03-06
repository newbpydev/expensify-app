import React from "react";
import { shallow } from "enzyme";
import expenses from "../fixtures/expenses";
import ExpenseListItem from "../../components/ExpenseListItem";

test("should render ExpenseListItem with expense", () => {
  const expense = expenses[1]
  const wrapper = shallow(<ExpenseListItem {...expense} />)
  // console.log(expense)
  expect(wrapper).toMatchSnapshot();
})








