import React, { Component } from 'react';
import './Task.css';
import PropTypes from 'prop-types';


class Task extends Component {



    StyleCompleted() {
        return{
            fontSize: '20px',
            color: this.props.task.done ? 'gray' : 'black',
            textDecoration: this.props.task.done ? 'line-through' : 'none',

        }
    }


    render() {
 
        return (
            <div style={this.StyleCompleted()} >
            {this.props.task.title} - 
            {this.props.task.id} - 
            {this.props.task.description} - 
            {this.props.task.done}
            <input type="checkbox" onChange={this.props.checkDone.bind(this, this.props.task.id)} />
            <button style={btnDelete} onClick={this.props.deleteTask.bind(this, this.props.task.id)} >
                x
            </button>

       
        </div>
            
        );
    }
}

Task.propTypes = {
    task: PropTypes.object.isRequired,
}

const btnDelete = {
    fontSize: '18px',
    color: 'white',
    backgroundColor: 'red',
    borderRadius: '50%',
    padding: '10px 15px',
    border:'none',

    cursor: 'pointer'
}

export default Task;