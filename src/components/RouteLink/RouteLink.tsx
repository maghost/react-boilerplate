import * as React from 'react'
import { Link, Route } from 'react-router-dom'

// STYLE
import './RouteLink.scss'

interface Props {
  to: string,
  label: string
}

const RouteComponent = (props: Props) => {
	return (
		<Route
			path={props.to}
			exact={true}
			children={({match}) => (
				<div className={match ? "active" : "not-active"}>
					<Link to={props.to}>{props.label}</Link>
				</div>
			)}
		/>
	)
}

export { RouteComponent }
