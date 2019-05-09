import React, { Component  } from 'react'

// STYLE
import './MainButton.scss'

interface Props {
  action(): void,
  children: string
}

export default class MainButton extends Component<Props> {
	constructor(props: Props) {
		super(props)
	}

	showURL = () => {
		alert(window.location.href)
	}

	render() {
			return (
				<button
					className="MainButton"
					onClick={this.props.action}>{this.props.children}</button>
			)
	}
}

// export default MainButton
