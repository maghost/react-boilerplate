import React, { Component  } from 'react'
import PropTypes from 'prop-types'

// STYLE
import './MainButton.scss'

export default class MainButton extends Component {
	constructor(props) {
		super(props)
	}

	static defaultProps = {
		children: 'Button Label',
	}
	
	static propTypes = {
		children: PropTypes.string,//.isRequired
		action: PropTypes.func.isRequired
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