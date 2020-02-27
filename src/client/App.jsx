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

  render() {
    return (
      <div>
        <h1> Add Task: </h1>
          <input type ="text" id ="taskName" placeholder="Add task" onChange={()=>{this.getInputValue(event);}} value = {this.state.word.toUpperCase()}/>

          <div className = "submit-btn">
            <button type ="button" onClick={()=>{this.handleClick(event);}}>Submit</button>
          </div>
      </div>
    );
  }
}

export default hot(module)(App);
