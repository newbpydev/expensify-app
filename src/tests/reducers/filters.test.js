import filterReducer from "../../reducers/filters";
import moment from "moment";

test("should setup default filter value", () => {
  const state = filterReducer(undefined, { type: "@@INIT" });

  expect(state).toEqual({
    text: "",
    sortBy: "date",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month"),
  });
});

test("should set sortBy to amount", () => {
  const state = filterReducer(undefined, { type: "SORT_BY_AMOUNT" });

  expect(state.sortBy).toBe("amount");
});

test("should set sortBy to date", () => {
  const state = filterReducer(undefined, { type: "SORT_BY_DATE" });

  expect(state.sortBy).toBe("date");
});

test("should set sortBy to date", () => {
  const currentState = {
    text: "",
    sortBy: "amount",
    startDate: undefined,
    endDate: undefined,
  };
  const action = {
    type: "SORT_BY_DATE",
  };
  const state = filterReducer(currentState, action);

  expect(state.sortBy).toBe("date");
});

test("should set text filter", () => {
  const action = {
    type: "SET_TEXT_FILTER",
    text: "rent"
  };
  const state = filterReducer(undefined, action);

  expect(state.text).toBe("rent");
});

test("should set start date", () => {
  const action = {
    type: "SET_START_DATE",
    startDate: moment(0).add(2, "days").valueOf(),
  };
  const state = filterReducer(undefined, action);

  expect(state.startDate).toEqual(action.startDate);
});

test("should set end date", () => {
  const action = {
    type: "SET_END_DATE",
    endDate: moment(0).add(4, "days").valueOf(),
  };
  const state = filterReducer(undefined, action);

  expect(state.endDate).toEqual(action.endDate);
});
