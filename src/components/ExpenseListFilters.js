import React from "react";
import { connect } from "react-redux";
import { setTextFilter, sortByAmount, sortByDate, setEndDate, setStartDate } from "../actions/filters";
import {DateRangePicker} from "react-dates"

class ExpenseListFilters extends React.Component {
  // constructor(props) {
  //   super(props)
  // }
  state = {
    calendarFocused: null,
  };
  onDatesChange = ({ startDate, endDate }) => {
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  };
  onFocusChange = (calendarFocused) =>
    this.setState({ calendarFocused });
  onTextChange = (e) => {
            this.props.dispatch(setTextFilter(e.target.value));
  }
  onSortChange = (e) => {
            if (e.target.value === "date") {
              this.props.dispatch(sortByDate());
            } else if (e.target.value === "amount") {
              this.props.dispatch(sortByAmount());
            }
          }

  render() {
    return (
      <div className="content-container">
        <div className="input-group">
          <div className="input-group__item">
            <input
              className="text-input"
              type="text"
              name=""
              id=""
              placeholder="Search expenses"
              value={this.props.filters.text}
              onChange={this.onTextChange}
            />
          </div>
          <div className="input-group__item">
            <select
              className="select"
              name="selectfilter"
              id="select-filter"
              value={this.props.filters.sortBy}
              onChange={this.onSortChange}
            >
              <option value="date">Date</option>
              <option value="amount">Amount</option>
            </select>
          </div>
          <div className="input-group__item">
            <DateRangePicker
              startDate={this.props.filters.startDate} // momentPropTypes.momentObj or null,
              startDateId="your_unique_start_date_idstart" // PropTypes.string.isRequired,
              endDate={this.props.filters.endDate} // momentPropTypes.momentObj or null,
              endDateId="your_unique_end_date_idend" // PropTypes.string.isRequired,
              onDatesChange={this.onDatesChange} // PropTypes.func.isRequired,
              focusedInput={this.state.calendarFocused} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
              onFocusChange={this.onFocusChange} // PropTypes.func.isRequired,
              // numberOfMonths={1}
              isOutsideRange={() => false}
              showClearDates={true}
            />
          </div>
        </div>
      </div>
    );
  }
}

// const ExpenseListFilters = (props) =>

const mapStateToProps = (state) => {
  return {
    filters: state.filters,
  };
};

export default connect(mapStateToProps)(ExpenseListFilters);
