import React from "react";
import ExpenseForm from "./ExpenseForm";
import { connect } from "react-redux";
import { startAddExpense, addExpense, editExpense } from "../actions/expenses";

import { useNavigate, Navigate } from "react-router-dom";

// export class AddExpensePage extends React.Component {
//   // navigate = useNavigate(); //! <= IMPORTANT TO ADD BEFORE THE RETURN
//   // STATEMENT

//   onSubmit = (expense) => {
//     this.props.onSubmit(expense);
//     // this.navigate("/");
//     // console.log('I am tying to navigate')
//     <Navigate to="/" />;
//   };

//   render() {
//     // console.log(props)
//     return (
//       <div>
//         <h1>Add Expense</h1>
//         <ExpenseForm onSubmit={this.onSubmit} />
//       </div>
//     );
//   }
// }
const AddExpensePage = (props) => {
  const navigate = useNavigate(); //! <= IMPORTANT TO ADD BEFORE THE RETURN STATEMENT

  return (
    <div>
      <div className="page-header">
        <div className="content-container">
          <h1 className="page-header__title">Add Expense</h1>
        </div>
      </div>
      <div className="content-container">
        <ExpenseForm
          isEditForm={false}
          onSubmit={(expense) => {
            props.dispatch(startAddExpense(expense));
            navigate("/dashboard");
          }}
        />
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    startAddExpense: (expense) => dispatch(startAddExpense(expense)),
  };
};

export default connect()(AddExpensePage);
