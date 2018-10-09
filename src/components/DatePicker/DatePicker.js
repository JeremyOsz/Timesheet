import React from 'react';


// Import Moment and React Dates
import 'react-dates/initialize';
import moment from 'moment';
import {  DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

export default class App extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
           startDate: moment(),
           endDate: null
        }
    }
  
    render() {
        return (
            <div>
                <DateRangePicker
				  startDate={this.state.startDate} // momentPropTypes.momentObj or null,
				  startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
				  endDate={this.state.endDate} // momentPropTypes.momentObj or null,
				  endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
				  onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
				  focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
				  onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
				/>
            </div>
        );
    }
}