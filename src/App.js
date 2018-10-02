import React from 'react';
import TimesheetEntryForm from './components/TimesheetEntryForm/TimesheetEntryForm.js'

let currentProjects = [{
  id: 1,
  name: 'Timesheet App'
},
{
  id: 2,
  name: 'Learn React'
},
{
  id: 3,
  name: 'Pat Gremlin'
}]

let agents = [{
  id: 1,
  name: 'Jeremy',
  number: '0402 772 283'
},
{
  id: 2,
  name: 'Alice',
  number: '0402 777 777'
},
{
  id: 3,
  name: 'Gremlin',
  number: '0402 777 777'
}]


class App extends React.Component {
  render() {
    return (
        <div>
          <TimesheetEntryForm 
            currentProjects={currentProjects} 
            agentList={agents} 
            key={currentProjects.id}
          />
        </div>
      )
  }
}

export default App;
