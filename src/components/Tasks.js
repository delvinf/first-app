import React, { Component } from 'react';
import Task from './Task';

class Tasks extends Component {

    render() {
        return this.props.tasks.map(tarea =>
        <Task task={tarea} key={tarea.id} />
        
            

    );

 

    }
}




export default Tasks