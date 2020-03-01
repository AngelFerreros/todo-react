import React, {Fragment} from 'react';
import { hot } from 'react-hot-loader';
import Moment from 'moment';
import Form from './components/form/form';

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
      this.setState({word:""});
    }
  };

//clears task upon click of clear btn
  removeTask(index) {
     this.state.list.splice(index, 1)
        let array = this.state.list
        this.setState({list: array})
  }

  render() {
    console.log('rendering');

 const taskEl = this.state.list.map((task, index) => {
        return (
            <Fragment>
                <li key={index}> {task}</li>
                <button onClick={()=>{ this.removeTask(index)}}>Clear Task</button>
            </Fragment>
            );
    })

    return (
      <div>
        <h1> Add Task: </h1>
          <Form userInput = { (input)=> {this.setState({word: input})}}/>

          <div className = "submit-btn">
            <button type ="button" onClick={()=>{this.handleClick(event);}}>Submit</button>
          </div>

          <div className = "tasks">
          <h2> My Tasks:</h2>
            <ul className = "taskList">
            {taskEl}
            </ul>
          </div>
      </div>
    );
  }
}

export default hot(module)(App);
