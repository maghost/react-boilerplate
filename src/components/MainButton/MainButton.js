import React from 'react'
import PropTypes from 'prop-types'

// STYLE
import './MainButton.scss'

MainButton.defaultProps = {
	children: 'Button Label'
}

MainButton.propTypes = {
	children: PropTypes.string
}

const MainButton = ( props ) => {

	const showURL = () => {
		alert(window.location.href)
	}

	return (
		<button
			className="MainButton"
			onClick={() => showURL()}>{props.children}</button>
	)
}

export default MainButton