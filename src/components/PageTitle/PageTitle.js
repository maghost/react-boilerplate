import React, { Component } from 'react'

const PageTitle = (props) => {
	return (
		<h1 className="PageTitle__title">{ props.title ? props.title : "Title" }</h1>
	)
}

export default PageTitle