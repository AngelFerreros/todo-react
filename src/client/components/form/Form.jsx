import React, {Fragment} from 'react';
import { hot } from 'react-hot-loader';


class Form extends React.Component {
  constructor(){
    super();
    this.state = {
     word:""
    };
  }

  getInputValue(event){
    this.setState({word:event.target.value});
    this.props.userInput(event.target.value)
    console.log('task:',event.target.value)
  }

  render() {

    let errorMsg = " ";
    if (this.state.error){
      var errorContainer = document.querySelector("#error");
      if (event.target.value.length < 1){
      errorMsg = `ERROR: No input!`;
      }
      else if (event.target.value.length > 200){
      errorMsg = `ERROR: Input is too long!`
      }
    }

    return (
      <div>
        <input type ="text" placeholder="Add task" onChange={()=>{this.getInputValue(event)}} value = {this.state.word}/>
          <div id = "error">{errorMsg}</div>
      </div>
    );
  }
}

export default Form;
