import React from 'react';
import { hot } from 'react-hot-loader';


class App extends React.Component {
  constructor(){
    super()
    console.log("input value");
    this.state = {
      word : "",
      error: false,
      list: []
    }
  }

  getInputValue(event){
    this.setState({word:event.target.value});
    console.log('task:',event.target.value)
  }

  handleClick(event){
    // a button click handler that takes what is in the input, removes it from the input and pushes it into the list.
    // write the code that renders the list
    debugger
    let currentTask = this.state.word;
    console.log('pushing task into array', currentTask)
    let taskArr = this.state.list;
    taskArr.push(currentTask);
    this.setState({word:" "});
    console.log(taskArr);
    let listItem = document.createElement('li');
    listItem.innerHTML = currentTask;
    document.getElementById('taskList').appendChild(listItem);
  }
  render() {
    console.log('rendering');
    return (
      <div>
        <h1> Add Task: </h1>
          <input type ="text" id ="taskName" placeholder="Add task" onChange={()=>{this.getInputValue(event);}} value = {this.state.word}/>

          <div className = "submit-btn">
            <button type ="button" onClick={()=>{this.handleClick(event);}}>Submit</button>
          </div>

          <div className = "tasks">
          <h2> My Tasks:</h2>
            <ul id = "taskList">
            </ul>
          </div>
      </div>
    );
  }
}

export default hot(module)(App);
