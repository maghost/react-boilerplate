import { combineReducers } from 'redux'

import { reducer as roadmapsReducer } from './roadmaps/reducer'

const rootReducer = combineReducers({
  roadmaps: roadmapsReducer
})

export {
  rootReducer
}
