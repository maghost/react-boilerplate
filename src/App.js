import React, { Component, Fragment } from 'react'
import { Provider } from 'react-redux'

// STORE
import store from './store'

// COMPONENTS
import PageTitle from './components/PageTitle/PageTitle'
import RoadmapList from './components/RoadmapList/RoadmapList';

export default class App extends Component {
	// no CONSTRUCTOR - if you do not initialize state or do not bind methods
	render() {
		return (
			<Provider store={store}>
				<Fragment>
					<PageTitle title="React Component" />
					<RoadmapList />
				</Fragment>
			</Provider>
		)
	}
}