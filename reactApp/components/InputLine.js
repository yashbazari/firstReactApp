import React from 'react';


export default class InputLine extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      typedText: ''
    }
  }
  handleTyping(event) {
    this.setState({
      typedText: event.target.value
    })
  }

  handleSubmit(event){
    event.preventDefault();
    var text = this.state.typedText;
    this.props.submit(text);
    this.setState({
      typedText: ''
    })
  }

  render(){
    return (
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <input type="text" placeholder="Enter Task Here" onChange={(e)=>this.handleTyping(e)} value={this.state.typedText}></input>
          <button className="btn bstn-default" type="submit">Add ToDo</button>
        </form>

      </div>
    )
  }
}
