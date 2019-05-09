import * as React from 'react'

// STYLE
import './LinksHeader.scss'

// COMPONENTS
import { RouteComponent } from '../RouteLink/RouteLink'

const LinksHeader = () => {
	return (
		<div className="LinksHeader">
			<RouteComponent to="/" label="Title"></RouteComponent>
			<RouteComponent to="/list" label="List"></RouteComponent>
		</div>
	)
}

export { LinksHeader }