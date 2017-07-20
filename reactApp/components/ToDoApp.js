import InputLine from './InputLine.js';
import ToDoList from './ToDoList.js';
import React from 'react';


var dummyData = [
{ taskText: "Catch 'em all 1", completed: false },
{ taskText: "Catch 'em all 2", completed: false },
{ taskText: "Catch 'em all 3", completed: false },
{ taskText: "Catch 'em all 4", completed: false }
];

export default class ToDoApp extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      todos: dummyData
    }
  }

  componentDidMount(){
    this.setState({
      todos: dummyData,
    })
  }

  addToDo(stringTask){
    var dummyDataCopy = this.state.todos.slice();
    dummyDataCopy.push({
      taskText: stringTask,
      completed: false
    });
    this.setState({
      todos: dummyDataCopy
    })

  }

  removeToDo(index){
    var dummyDataCopy = this.state.todos.slice();
    dummyDataCopy.splice(index, 1);
    this.setState({
      todos: dummyDataCopy
    })
  }

  toggleTodo(index){
    var dummyDataCopy = this.state.todos.slice();
    console.log(index)
    dummyDataCopy[index].completed = !dummyDataCopy[index].completed;
    this.setState({
      todos: dummyDataCopy
    })
  }

  render(){
    return (
      <div>
        <InputLine submit={(task) => this.addToDo(task)}/>
        <ToDoList toggleCompleted={(index) => this.toggleTodo(index)} todoXClick={(index) => this.removeToDo(index)} todos={this.state.todos} />
      </div>
    )
  }
}
