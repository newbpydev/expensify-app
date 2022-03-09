import React from "react";
import moment from "moment";
import numeral from "numeral";

import { Link } from "react-router-dom";

const ExpenseListItem = ({id, description, amount, createdAt, expenses, dispatch }) => (
  <div>
    <h3><Link to={`/edit/${id}`} state={{id}}>{description}</Link></h3>
    <p>
      Amount: {numeral(amount / 100).format("$0,0.00")}
      -
      Created At: {moment(createdAt).format('MMMM Do, YYYY')}
    </p>
    
  </div>
);

// const mapStateToProps = (state) => {
//   return {
//     expenses: state.expenses
//   }
// }

export default ExpenseListItem;
