import React from 'react';
import './App.css';



class App extends React.Component {
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


class Hola extends React.Component {
constructor(props){super(props);

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





export default App;
