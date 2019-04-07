import React, { Component } from 'react';

export default class Cell extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color
    }
  }

  handleColorChange = (e) => {
    this.setState({
      color: this.props.newColor
      
    })
    
  }
  
  render() {
    return (
      <div onClick={this.handleColorChange} className="cell" style={{backgroundColor: this.state.color}}>
      </div>
    )
  }
  
}
