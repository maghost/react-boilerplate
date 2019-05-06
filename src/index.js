/*
USED TO RENDER MAIN APP COMPONENT
INTO HTML INDEX FILE.
*/
import React from 'react'
import { render } from 'react-dom'

// STYLE
import './app.scss'

// COMPONENTS
import PageTitle from './components/PageTitle/PageTitle'
import Counter from './components/Counter/Counter';

class App extends Component {
	// no CONSTRUCTOR - if you do not initialize state or do not bind methods
	render() {
		return (
			<div className="app">
				<PageTitle title="React Component" />
				<Counter></Counter>
			</div>
		)
	}
}

render(<App/>, document.getElementById('app'))