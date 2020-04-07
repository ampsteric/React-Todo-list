import React, { Component } from 'react';
import TaskOutput from './Components/TaskOutput';
import TaskInput from './Components/TaskInput';
import mysvg from './one.svg'
import './App.css';

class App extends Component {
  state={
    items:[],
    item:{
      text:'',
      key:''
    },
  }

  clickHandler=(event)=>{
    event.preventDefault();
    var newItem=this.state.item;
    var newItems=[...this.state.items,newItem]
    this.setState({
      items:newItems,
      item:'',
      key:''
    })

  }
  changeHandler=(event)=>{
    
const input= event.target.value;

this.setState({
  item:{
    text:input,
    key:Date.now()
  }
})
  }
  render(){
  return (
    <div className="App">
            <div class="header">
              <h1>Let's Plan</h1>
              </div>
              <div class="container">
                
                        <div className="right">
                          <img src={mysvg} alt=""></img>
                        </div>

                        <div className="left">
                            <center>
                                <TaskInput  change={this.changeHandler} clicked={this.clickHandler}/>
                                <TaskOutput items={this.state.items}/>
                            </center>
                        </div>

                </div>  
              
    </div>
  );
}
}

export default App;
