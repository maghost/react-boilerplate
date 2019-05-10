import { combineReducers } from 'redux'

import { roadmapsReducers } from './roadmaps/reducers'

const rootReducer = combineReducers({
  roadmapsReducers
})

export {
  rootReducer
}
