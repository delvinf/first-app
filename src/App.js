import React, { Component } from 'react';
import './App.css';
import TasksList from './sample/task.json';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

//Componentes

import Tasks from './components/Tasks.js';
import TaskForm from './components/TaskForm.js';
import Posts from './components/Posts.js';

 
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      tasks: TasksList,
     };
  }

  addTask = (title, description) => {
    const newTask = {
      id: this.state.tasks.length,
      title: title,
      description: description,
      
    }
    this.setState({
      tasks: [...this.state.tasks, (newTask)]
    })

  }


  deleteTask = (id) => {
    const newTasks = this.state.tasks.filter(task => task.id !== id)
    this.setState({
      tasks: newTasks
    })

  }

  checkDone = id => {
    const newTask = this.state.tasks.map(task => {
      if(task.id === id){
        task.done = !task.done
      }
      return task
    })
    this.setState({tasks: newTask

    })
  }


  render() {
    return (     <div id="container" >

<Router>
  <div id="nav-bar">
  <Link to="/" className="nav-link" >Home</Link>
  <br />
  <Link to="/posts" className="nav-link" >Posts</Link>
  </div>

<Route exact path="/" render={() => {
return(
<div className="contenido">
<ToDoList />

<h1>_______________</h1>
<h1>Otra App</h1>
<TaskForm addTask={this.addTask} />
<Tasks tasks={this.state.tasks}
deleteTask={this.deleteTask}
checkDone={this.checkDone} />

</div>)
}
} >

</Route>

<Route path="/posts" render={() => {

  return(
    <div className="contenido">
       <Posts />
    </div>
   
  )
}} />

</Router>

 
        


      </div>
    );
  }
}



class ToDoList extends Component {
  constructor(props){super(props);
    this.state = {
      userInput: " ",
      toDoList: []
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

  }

  handleSubmit() {
    const itemsArray = this.state.userInput.split(",");
    this.setState({toDoList: itemsArray});
  }
    handleChange(e){
      this.setState({userInput: e.target.value});
    }
  

  render() {
    

    const items = this.state.toDoList.map(i => <li>{i}</li>)
    return (
      <div>
        <Hola myName={"Don Gil"} />
  
        <textarea onChange={this.handleChange} value={this.state.userInput} placeholder="Separa con comas (,)" />
        <br />
        <button onClick={this.handleSubmit}>Crear Lista</button>
        <h1>Mi lista de tareas</h1>
        <ul>{items} </ul>

       

      </div>

    

    )
  }

  
}


class Hola extends Component {
constructor(props){
  super(props);

  this.state = {
    show: true,
  };
  
  this.toggleShow = this.toggleShow.bind(this);
}

toggleShow () {
  this.setState({show: !this.state.show})};

  render() { 
    if(this.state.show){
    return(
    <div>
    <h1> Hola {this.props.myName}<button onClick={this.toggleShow}>Ocultar Nombre</button> </h1> 
    </div>
    )}
    
    else{ return(
<div>
    <h1> Hola Anonimo <button onClick={this.toggleShow}>Ver Nombre</button></h1> 
    </div>
    )}
}
 
}


// SE ACAB?? (OTRA APP) 








export default App;
