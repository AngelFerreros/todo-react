import React from 'react';
import { hot } from 'react-hot-loader';


class App extends React.Component {
  constructor(){
    super()
    console.log("input value");
    this.state = {
      word : "",
      error: false
    }
  }

  getInputValue(event){
    this.setState({word:event.target.value});
    console.log('task:',event.target.value)
  }

  handleClick(event){
    // a button click handler that takes what is in the input, removes it from the input and pushes it into the list.
    // write the code that renders the list
    // debugger
    let task = this.state.word;
    console.log('pushing task into array', task)
    this.setState({word:" "});
  }


  render() {
    let taskList = [];
    let tasks = taskList.map (task => <li> {task} </li>)

    return (
      <div>
        <h1> Add Task: </h1>
          <input type ="text" id ="taskName" placeholder="Add task" onChange={()=>{this.getInputValue(event);}} value = {this.state.word.toUpperCase()}/>

          <div className = "submit-btn">
            <button type ="button" onClick={()=>{this.handleClick(event);}}>Submit</button>
          </div>

          <div className = "tasks">
            <ul>
            </ul>
          </div>
      </div>
    );
  }
}

export default hot(module)(App);
