import React from 'react';

export default class ToDo extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return (
      <li> <button onClick={()=>this.props.xClick()} className="btn btn-default">X</button>
      <div onClick={()=>this.props.toggleClick()} style={{display: 'inline'}}>
      {this.props.task.completed ? <strike>{this.props.task.taskText}</strike> : this.props.task.taskText}
    </div>
      </li>
    )
  }
}
