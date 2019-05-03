import React, { Component, Fragment } from 'react'

// STYLE
import './PageTitle.scss'
// import Loading from '../Loading/Loading';

const PageTitle = (props) => {
	return (
		<div className="PageTitle">
			<h1 className="PageTitle__title">{ props.title ? props.title : "Title" }</h1>
			{/* <Loading/> */}
		</div>
	)
}

export default PageTitle