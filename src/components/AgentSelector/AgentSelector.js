import React from 'react';
import SelectItem from '../SelectItem/SelectItem.js'


export default class AgentSelector extends React.Component {
	// static propTypes = {
	// 	agents: React.PropTypes.array,
	// };


	constructor(props) {
		super(props);
		this.state = {
			agents: this.props.agents
		}
	}

	render() {
		return (
			<div>
				<select name="" id="">
					{
          this.state.agents
          .map((agent) => {
            return(
                // <option key={project.id}>
                  <SelectItem item={agent} key={agent.id}/>
                // </option>
              )
          })
        }
				</select>
			</div>
		);
	}
}
