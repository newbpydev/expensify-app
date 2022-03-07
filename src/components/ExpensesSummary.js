import React from "react";
import { connect } from "react-redux";
import selectExpenses from "../selectors/expenses";
import expensesTotal from "../selectors/expenses-total";
import numeral from "numeral";

export function ExpensesSummary({ dispatch, expensesCount, expensesTotal }) {
  const expenseWord = expensesCount === 1 ? "expense" : "expenses";
  const formattedExpensesTotal = numeral(expensesTotal / 100).format("$0,0.00");
  // console.log(props)
  return (
    <div>
      <h4>
        {expensesCount > 0
          ? `Viewing ${expensesCount} ${expenseWord} totalling ${formattedExpensesTotal}`
          : "There are no expenses"}
      </h4>
    </div>
  );
}

const mapStateToProp = (state) => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters);
  return {
    expensesTotal: expensesTotal(visibleExpenses),
    expensesCount: visibleExpenses.length,
  };
};

export default connect(mapStateToProp)(ExpensesSummary);
