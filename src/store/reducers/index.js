import { combineReducers } from 'redux'

import roadmap from './roadmap'
import counter from './counter'

export default combineReducers({
  roadmap: roadmap,
  counter: counter
})