import React from 'react'
import { connect } from 'react-redux'

// STYLE
import './PageTitle.scss'

interface Props {
  title: string
}

interface State {
  title: string
}

const PageTitle = (props: Props) => {
	return (
		<div className="PageTitle">
			<h1 className="PageTitle__title">{ props.title ? props.title : "Title" }</h1>
		</div>
	)
}

const mapStateToProps = (state: State) => ({
	title: state.title
})

export default connect(mapStateToProps)(PageTitle)
