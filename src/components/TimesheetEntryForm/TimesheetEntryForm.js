import React from 'react';
import ProjectSelector from '../ProjectSelector/ProjectSelector.js';
import AgentSelector from '../AgentSelector/AgentSelector';
// import DatePicker from './DatePicker';
// import DescriptionInput from './DescriptionInput';

class TimesheetEntryForm extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			currentProjects: this.props.currentProjects,
			agents: this.props.agentList
		}
	}
	submitTimesheet(e){
			console.log(e);
		}

	render() {
	return (
	    <form action="" onSubmit={this.submitTimesheet.bind(this)}>
	      <h1>Projects</h1>
	      <ProjectSelector currentProjects={this.state.currentProjects} key={this.state.currentProjects.id}/>
          {<AgentSelector agents={this.state.agents} />}
	      {/*<DatePicker />
	      <DescriptionInput />*/}
	      <button type='submit'>Submit Timesheet</button>
	    </form>
	  )
}
}

export default TimesheetEntryForm;