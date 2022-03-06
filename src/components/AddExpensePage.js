import React from "react";
import ExpenseForm from "./ExpenseForm";
import { connect } from "react-redux";
import { addExpense, editExpense } from "../actions/expenses";

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
      <h1>Add Expense</h1>
      <ExpenseForm
        onSubmit={(expense) => {
          props.dispatch(addExpense(expense));
          navigate("/");
          // props.dispatch(addExpense(expense));
          // props.history.push('/')
          // console.log(navigate)

          // console.log(navigate("/"));
        }}
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  // console.log('hi')
  return {
    addExpense: (expense) => dispatch(addExpense(expense)),
  };
};

export default connect()(AddExpensePage);
