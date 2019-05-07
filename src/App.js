import React, { Component, Fragment } from 'react'
import { Provider } from 'react-redux'
import { Link, Route } from 'react-router-dom'

// STYLE
import './app.scss'

// STORE
import store from './store'

// COMPONENTS
import PageTitle from './components/PageTitle/PageTitle'
import RoadmapList from './components/RoadmapList/RoadmapList';
// import Counter from './components/Counter/Counter';

export default class App extends Component {
	// no CONSTRUCTOR - if you do not initialize state or do not bind methods
	render() {
		return (
			<Provider store={store}>
				<div className="app">
					<div>
						<Link to={`/`}>Title</Link>
						<Link to={`/list`}>List</Link>
					</div>

					<Route exact path="/" render={() => (
						<PageTitle title="React Component" />
					)}></Route>

					<Route path="/list" render={() => (
						<RoadmapList></RoadmapList>
					)}></Route>
					{/* <Counter></Counter> */}
				</div>
			</Provider>
		)
	}
}