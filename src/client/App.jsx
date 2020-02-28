import React from 'react';
import { hot } from 'react-hot-loader';
var moment = require('moment');
moment().format();

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
    // input validation
    debugger;
    if (this.state.word === "") {
      this.setState({ error:true})
    }
    else if(this.state.word.length >1<=200){
      this.setState({error:false});
      let currentTask = this.state.word;
      console.log('pushing task into array', currentTask)
      let taskArr = this.state.list;
      taskArr.push(currentTask);
      console.log(taskArr);
      let listItem = document.createElement('li');
      let clearBtn = document.createElement('button')
      listItem.innerHTML = currentTask;
      clearBtn.innerText = "Clear Task"
      clearBtn.id = taskArr.indexOf(currentTask);
      document.querySelector('.taskList').appendChild(listItem);
      document.querySelector('.taskList').appendChild(clearBtn);
      this.setState({word:""});
    }
  };

//clears task upon click of clear btn




  render() {
    console.log('rendering');
    let errorMsg = " ";

    if (this.state.error){
      var errorContainer = document.querySelector("#error");
      if (event.target.value.length < 1)
      errorMsg = `ERROR: No input!`;
      else if (event.target.value.length > 200)
      errorMsg = `ERROR: Input is too long!`
    }



    return (
      <div>
        <h1> Add Task: </h1>
          <input type ="text" id ="taskName" placeholder="Add task" onChange={()=>{this.getInputValue(event);}} value = {this.state.word}/>
          <div id = "error">{errorMsg}</div>

          <div className = "submit-btn">
            <button type ="button" onClick={()=>{this.handleClick(event);}}>Submit</button>
          </div>

          <div className = "tasks">
          <h2> My Tasks:</h2>
            <ul class = "taskList">

            </ul>
          </div>
      </div>
    );
  }
}

export default hot(module)(App);
