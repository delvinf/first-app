import React, { Component } from 'react';

class TaskForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            description: '',
          };
          
    }

    onSubmit = e => {
        this.props.addTask(this.state.title, this.state.description)
        e.preventDefault();

    }

    onChange = e => {

        this.setState({
            [e.target.name]: e.target.value,
        }

        )

    }

    render() {
        
        return (
            
            <form onSubmit={this.onSubmit} >
                <input 
                name= "title"
                type="text" 
                placeholder="Escribe tu tarea" 
                onChange={this.onChange} 
                value={this.state.title} />
                <br />
                <textarea 
                name= "description"
                placeholder="escribe la descripción" 
                onChange={this.onChange} 
                value={this.state.description} ></textarea>
                <br />
                <input type="submit" />





            </form>
        );
    }
}

export default TaskForm;