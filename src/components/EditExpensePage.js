import React from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { startEditExpense, startRemoveExpense } from "../actions/expenses";
import { useNavigate } from "react-router-dom";

const getExpense = (id, expenses) => {
  return expenses.find((expense) => expense.id === id);
};

const EditExpensePage = (props) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const expenseData = getExpense(id, props.expenses);

  return (
    <div>
      <ExpenseForm
        isEditForm={true}
        expense={expenseData}
        onSubmit={(expense) => {
          props.dispatch(startEditExpense(id, expense));
          navigate("/dashboard");
        }}
      />
      <button
        onClick={(e) => {
          props.dispatch(startRemoveExpense({ id }));
          navigate("/dashboard");
        }}
      >
        Remove
      </button>
    </div>
  );
};

//! Keep the wrapper in mind when using Link with State
// const EditExpensePageWrapper = (props) => {
//   const { id } = useParams()

//   console.log(id)
//   return <EditExpensePage id={id} {...props} />
// }

const mapStateToProps = (state) => {
  return {
    expenses: state.expenses,
  };
};

export default connect(mapStateToProps)(EditExpensePage);
