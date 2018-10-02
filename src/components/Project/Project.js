import React from 'react';

const Project = ({project}) =>
		<option>
			{project.id} - {project.name}
		</option>
		

export default Project;