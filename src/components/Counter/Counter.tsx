import * as React from 'react'
import { connect } from 'react-redux'

// STYLE
import './Counter.scss'

// COMPONENTS
import MainButton from '../MainButton/MainButton';

interface Props {
  counter: number
}

interface State {
  count: number
}

class Counter extends React.Component<Props, State> {
  constructor(props: Props) {
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

const mapStateToProps = (state: State) => ({
  counter: state.count
})

export default connect(mapStateToProps)(Counter)
