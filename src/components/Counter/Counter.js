import React, { Component } from 'react'

// STYLE
import './Counter.scss'

// COMPONENTS
import MainButton from '../MainButton/MainButton';

export default class Counter extends Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 0
    }
  }

  addOne = () => {
    this.setState({ count: this.state.count + 1 })
  }

  removeOne = () => {
    this.setState({ count: this.state.count - 1 })
  }

  render() {
    return (
      <div className="Counter">
        <MainButton action={this.removeOne}>Down</MainButton>
        <p className="Counter__value">{this.state.count}</p>
        <MainButton action={this.addOne}>Up</MainButton>
      </div>
    )
  }
}