import * as React from 'react'
import { Provider } from 'react-redux'
import { Route } from 'react-router-dom'

// STYLE
import './app.scss'

// STORE
import store from './store'

// COMPONENTS
import PageTitle from './components/PageTitle/PageTitle'
import RoadmapList from './components/RoadmapList/RoadmapList';
import Counter from './components/Counter/Counter';
import { LinksHeader } from './containers/LinksHeader/LinksHeader'

export default class App extends React.Component {
	// no CONSTRUCTOR - if you do not initialize state or do not bind methods
	render() {
		return (
			<Provider store={store}>
				<div className="app">
					<LinksHeader />

					<Route exact path="/" render={() => (
						<React.Fragment>
							<PageTitle />
							<Counter></Counter>
						</React.Fragment>
					)}></Route>

					<Route path="/list" render={() => (
						<RoadmapList></RoadmapList>
					)}></Route>
				</div>
			</Provider>
		)
	}
}
