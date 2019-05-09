import React from 'react'
import { connect } from 'react-redux'

// STYLE
import './PageTitle.scss'

const PageTitle = (props) => {
	return (
		<div className="PageTitle">
			<h1 className="PageTitle__title">{ props.title ? props.title : "Title" }</h1>
		</div>
	)
}

const mapStateToProps = (state) => ({
	title: state.title
})

export default connect(mapStateToProps)(PageTitle)