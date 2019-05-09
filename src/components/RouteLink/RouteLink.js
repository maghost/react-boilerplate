import * as React from 'react'
import { Link, Route } from 'react-router-dom'

// STYLE
import './RouteLink.scss'

const RouteComponent = ({ to, label }) => {
	return (
		<Route
			path={to}
			exact="true"
			children={({match}) => (
				<div className={match ? "active" : "not-active"}>
					<Link to={to}>{label}</Link>
				</div>
			)}
		/>
	)
}

export { RouteComponent }