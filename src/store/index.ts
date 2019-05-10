import { createStore, Store } from 'redux'
import { RoadmapsState } from './ducks/roadmaps/types'

import { rootReducer } from './ducks/rootReducer'

export interface ApplicationState {
  roadmaps: RoadmapsState
}

const store: Store<ApplicationState> = createStore(rootReducer)

export {
  store
}
