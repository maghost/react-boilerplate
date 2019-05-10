import * as React from 'react'
import { Provider } from 'react-redux'
import { Route } from 'react-router-dom'

// STYLE
import './app.scss'

// STORE
import { store } from './store'

// COMPONENTS
import PageTitle from './components/PageTitle/PageTitle'
import RoadmapList from './components/RoadmapList/RoadmapList';
import Counter from './components/Counter/Counter';
import { LinksHeader } from './containers/LinksHeader/LinksHeader'

const App = () => (
  <Provider store={store}>
    <div className="app">
      <LinksHeader />

      <Route exact path="/" render={() => (
        <React.Fragment>
          <PageTitle />
          <Counter />
        </React.Fragment>
      )}></Route>

      <Route path="/list" render={() => (
        <RoadmapList />
      )}></Route>
    </div>
  </Provider>
)

export default App
