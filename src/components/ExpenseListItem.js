import React from "react";
import moment from "moment";
import numeral from "numeral";

import { Link } from "react-router-dom";

const ExpenseListItem = ({
  id,
  description,
  amount,
  createdAt,
  expenses,
  dispatch,
}) => (
  <Link className="list-item" to={`/edit/${id}`} state={{ id }}>
    <div>
      <h3 className="list-item__title">{description}</h3>
      <span className="list-item__sub-title">{moment(createdAt).format("MMMM Do, YYYY")}</span>
    </div>
    <h3 className="list-item__data">{numeral(amount / 100).format("$0,0.00")}</h3>
  </Link>
);

// const mapStateToProps = (state) => {
//   return {
//     expenses: state.expenses
//   }
// }

export default ExpenseListItem;
