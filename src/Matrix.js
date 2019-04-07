import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor(props) {
    super() 
    this.state = {
      selectedColor : ""
    }
  }

  handleColor = (hexColor) => {
    this.setState({
      selectedColor: hexColor
    })
  }

  genRow = (vals) => (
    vals.map((val, idx) => <Cell newColor={this.state.selectedColor} key={idx} color={val} />)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )


  render() {
    return (
      <div id="app">
        <ColorSelector handleColor={this.handleColor}/>
        <div id="matrix">
          {this.genMatrix()}
        </div>
      </div>
    )
  }

}

Matrix.defaultProps = {
  values: chromeBoi
}
