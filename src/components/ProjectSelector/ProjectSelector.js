import React from 'react';
// import ComboBox from '././ComboBox/ComboBox.js';
import Project from '../Project/Project.js'

class ProjectSelector extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			currentProjects: this.props.currentProjects
		}
	}
  render() {
    return (
        <div className='c-comboBox'>
          <select type="select">
            {
              this.state.currentProjects
              .map((project) => {
                return(
                    // <option key={project.id}>
                      <Project project={project} key={project.id}/>
                    // </option>
                  )
              })
            }
          </select>
        </div>
      )
  }
}

export default ProjectSelector;