import React, { Component } from 'react';
import Task from './Task.js';
import PropTypes from 'prop-types';

class Tasks extends Component {

    render() {
        return this.props.tasks.map(tarea =>
        <Task task={tarea} key={tarea.id} deleteTask={this.props.deleteTask} checkDone={this.props.checkDone} />
        
            

    );

 

    }
}

Tasks.propTypes = {
    tasks: PropTypes.array.isRequired,
}

export default Tasks