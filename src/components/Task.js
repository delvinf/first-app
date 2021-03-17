import React, { Component } from 'react';


class Task extends Component {

    render() {
 

        return (
            <div>
            {this.props.task.title} - 
            {this.props.task.id} - 
            {this.props.task.description} - 
            {this.props.task.done}
            <input type="checkbox"/>
            <button>
                x
            </button>

       
        </div>
            
        );
    }
}

export default Task;