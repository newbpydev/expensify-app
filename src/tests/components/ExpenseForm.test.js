import React from "react";
import moment from "moment";
import { shallow } from "enzyme";
import ExpenseForm from "../../components/ExpenseForm";
import expenses from "../fixtures/expenses";

test("should render ExpenseForm correctly", () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();
});

test("should render ExpenseForm with data", () => {
  const wrapper = shallow(<ExpenseForm expense={expenses[0]} />);
  expect(wrapper).toMatchSnapshot();
});

test("should render error for invalid form submission", () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();
  wrapper.find("form").simulate("submit", {
    preventDefault: () => {},
  });
  expect(wrapper.state("error").length).toBeGreaterThan(0);
  expect(wrapper).toMatchSnapshot();
});

test("should set description on input chage", () => {
  const value = "New description";
  const wrapper = shallow(<ExpenseForm />);
  // expect(wrapper).toMatchSnapshot()
  wrapper.find("input").at(0).simulate("change", {
    target: { value },
  });
  expect(wrapper.state("description")).toBe(value);
});

test("should set note on textarea change", () => {
  const value = "this is a note";
  const wrapper = shallow(<ExpenseForm />);

  expect(wrapper).toMatchSnapshot();
  wrapper.find("textarea").simulate("change", {
    target: { value },
  });
  expect(wrapper.state("note")).toBe(value);
  expect(wrapper).toMatchSnapshot();
});

test("should set amount on input change", () => {
  const value = "12.59";
  const wrapper = shallow(<ExpenseForm />);

  expect(wrapper).toMatchSnapshot();
  wrapper.find("#amount").simulate("change", {
    target: { value },
  });
  expect(wrapper.state("amount")).toBe(value);
  expect(wrapper).toMatchSnapshot();
});

test("should set wrong amount on input change", () => {
  const value = "99.873";
  const wrapper = shallow(<ExpenseForm />);

  expect(wrapper).toMatchSnapshot();
  wrapper.find("#amount").simulate("change", {
    target: { value },
  });
  expect(wrapper.state("amount")).toBe("");
  expect(wrapper).toMatchSnapshot();
});

test("should call onSubmit prop for valid form submission", () => {
  const onSubmitSpy = jest.fn();
  const wrapper = shallow(
    <ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />
  );

  wrapper.find("form").simulate("submit", {
    preventDefault: () => {},
  });

  expect(wrapper.state("error")).toBe("");
  expect(onSubmitSpy).toHaveBeenLastCalledWith({
    description: expenses[0].description,
    amount: expenses[0].amount,
    note: expenses[0].note,
    createdAt: expenses[0].createdAt,
  });

  // onSubmitSpy('Juan', "city")
  // expect(onSubmitSpy).toHaveBeenCalledWith('Juan', 'city')
  // expect(onSubmitSpy).toHaveBeenCalled()
});


test("should set new date on date change", () => {
  const now = moment()
  const wrapper = shallow(<ExpenseForm />)

  wrapper.find("withStyles(SingleDatePicker)").prop("onDateChange")(now);
  expect(wrapper.state('createdAt')).toEqual(now)
  expect(wrapper).toMatchSnapshot()
})

test("should set calendarFocus onFocusChange", () => {
  const focused = true;
  const wrapper = shallow(<ExpenseForm />)
  
  expect(wrapper).toMatchSnapshot()
  wrapper.find("withStyles(SingleDatePicker)").prop("onFocusChange")({focused});
  expect(wrapper.state('calendarFocused')).toBe(focused)
  expect(wrapper).toMatchSnapshot()
})








