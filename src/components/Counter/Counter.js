import React, { Component } from 'react'
import { connect } from 'react-redux'

// STYLE
import './Counter.scss'

// COMPONENTS
import MainButton from '../MainButton/MainButton';

class Counter extends Component {
  constructor(props) {
    super(props)
  }

  addOne = () => {
    this.setState(state => ({ count: state.count + 1 }))
  }

  removeOne = () => {
    this.setState(state => ({ count: state.count - 1 }))
  }

  render() {
    return (
      <div className="Counter">
        <MainButton action={this.removeOne}>Down</MainButton>
        <p className="Counter__value">{this.props.counter}</p>
        <MainButton action={this.addOne}>Up</MainButton>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  counter: state.counter
})

export default connect(mapStateToProps)(Counter)