import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters';


class ExpenseListFilters extends React.Component {
    constructor(props) {
        super(props);
        this.onDatesChange = this.onDatesChange.bind(this);
        this.onFocusChange = this.onFocusChange.bind(this);
        this.state = {
            calendarFocused: null,
            error: ''
        };
    }

    onDatesChange({ startDate, endDate }) {//DateRangePicker eken meka call wenawa data change unama
        //eken ewanawa start date eka and end date eka , e object eka destructor karala thama methenta aragena tynnee
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
        console.log(startDate, endDate);
    }

    onFocusChange(focusInput) {
        this.setState(()=>({calendarFocused: focusInput}));
    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    value={this.props.filters.text}
                    onChange={(e) => {
                        this.props.dispatch(setTextFilter(e.target.value))
                    }} />
                <select
                    value={this.props.filters.sortBy}
                    onChange={(e) => {
                        if (e.target.value === 'date') {
                            this.props.dispatch(sortByDate());
                        } else if (e.target.value === 'amount') {
                            this.props.dispatch(sortByAmount());
                        }
                    }}>
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>
                <DateRangePicker
                    startDate={this.props.filters.startDate}
                    endDate={this.props.filters.endDate}
                    onDatesChange={this.onDatesChange}
                    focusedInput={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    showClearDates={true}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };
};

export default connect(mapStateToProps)(ExpenseListFilters);