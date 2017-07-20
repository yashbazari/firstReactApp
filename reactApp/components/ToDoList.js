import ToDo from './ToDo.js';
import React from 'react';


export default class ToDoList extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <ul>
        {this.props.todos.map((item, index) => <ToDo toggleClick={()=>this.props.toggleCompleted(index)} xClick={()=>this.props.todoXClick(index)}task={item}/>)}
      </ul>
    )
  }
}
