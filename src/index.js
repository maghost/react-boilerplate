import React, { Component, Fragment } from 'react'
import { render } from 'react-dom'

// COMPONENTS
import PageTitle from './components/PageTitle/PageTitle'

class App extends Component {
	// no CONSTRUCTOR - if you do not initialize state or do not bind methods
	render() {
		return (
			<Fragment>
				<PageTitle title="React Component" />
			</Fragment>
		)
	}
}

render(<App/>, document.getElementById('app'))