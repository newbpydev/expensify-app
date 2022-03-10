import React from "react";

import moment from "moment";
// import { SingleDatePicker } from "react-dates";
// import "react-dates/lib/css/_datepicker.css";
import "react-dates/initialize";
import { SingleDatePicker } from "react-dates";

// const now = moment();

export default class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: props.expense ? props.expense.description : "",
      amount: props.expense ? (props.expense.amount / 100).toString() : "",
      note: props.expense ? props.expense.note : "",
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      calendarFocused: false,
      error: "",
    };
  }

  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };
  onAmountChange = (e) => {
    const amount = e.target.value;
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  };
  onDateChange = (createdAt) => {
    if (createdAt) {
      this.setState(() => ({ createdAt }));
    }
  };
  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  };
  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({ note }));
  };
  onSubmitHandle = (e) => {
    e.preventDefault();

    if (!this.state.description || !this.state.amount) {
      // set error message
      this.setState(() => ({
        error: "Please provide description and amount.",
      }));
      if (!this.state.description) {
        // e.target.elements.description.focus();
      } else if (!this.state.amount) {
        e.target.elements.amount.focus();
      }
    } else {
      // clear the error
      this.setState(() => ({
        error: "",
      }));

      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100,
        note: this.state.note,
        createdAt: this.state.createdAt.valueOf(),
      });
    }
  };

  render() {
    return (
      <form className="form" action="" onSubmit={this.onSubmitHandle}>
        {this.state.error && <p className="form__error">{this.state.error}</p>}
        <input
          className="text-input"
          type="text"
          name="description"
          id="description"
          placeholder="Description"
          autoFocus
          value={this.state.description}
          onChange={this.onDescriptionChange}
          // required
        />
        <input
          className="text-input"
          type="text"
          name="amount"
          id="amount"
          placeholder="Amount"
          value={this.state.amount}
          onChange={this.onAmountChange}
          // required
        />

        <SingleDatePicker
          date={this.state.createdAt}
          onDateChange={this.onDateChange}
          focused={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          id="tisisis"
          numberOfMonths={1}
          isOutsideRange={() => false}
        />

        <textarea
          className="textarea"
          name="note"
          id="note"
          cols="39"
          rows="5"
          value={this.state.note}
          onChange={this.onNoteChange}
          placeholder="Add a note for your expense (optional)"
        ></textarea>
        <div>
          <button className="button">{this.props.isEditForm ? "Edit" : "Save"} Expense</button>
        </div>
      </form>
    );
  }
}

// const mapStateToProps = (state) => ({
//   expenses: state.expenses
// })

// export default connect(mapStateToProps)(ExpenseForm)
