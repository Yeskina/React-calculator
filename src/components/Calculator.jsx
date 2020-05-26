import React, { Component } from 'react'
import Items from './Items'
import InputPanel from './InputPanel'

export default class Calculator extends Component {
  constructor(props) {
    super(props)

    this.state = {
      wasCalculated: false,
      result: '',
    }
  }

  addToInput = (buttonName) => {
    if (buttonName === '=') {
      this.calculate()
    } else if (buttonName === 'C') {
      this.reset()
    } else if (buttonName === '←') {
      this.backspace()
    } else {
      if (this.state.wasCalculated) {
        this.setState({
          result: '',
          wasCalculated: false,
        })
      }
      this.setState((state) => ({
        result: state.result + buttonName,
      }))
    }
  }

  backspace = () => {
    this.setState({
      result: this.state.result.slice(0, -1),
    })
  }

  reset = () => {
    this.setState({
      result: '',
    })
  }

  calculate = () => {
    this.setState({
      // eslint-disable-next-line no-eval
      result: String(eval(this.state.result)),
      wasCalculated: true,
    })
  }

  render() {
    return (
      <div className="main-container">
        <InputPanel result={this.state.result} />
        <Items addToInput={this.addToInput} />
      </div>
    )
  }
}
