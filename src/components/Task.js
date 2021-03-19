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
            {this.props.task.id} - 
            {this.props.task.title} - 
            {this.props.task.description}
            {this.props.task.done}
            <input type="checkbox" onChange={this.props.checkDone.bind(this, this.props.task.id)} />
            <button className="btnDelete"  onClick={this.props.deleteTask.bind(this, this.props.task.id)} >
                x
            </button>

       
        </div>
            
        );
    }
}

Task.propTypes = {
    task: PropTypes.object.isRequired,
}

export default Task;