import { combineReducers } from 'redux'

import roadmap from './roadmap'
import counter from './counter'
import title from './title'

export default combineReducers({
  title: title,
  roadmap: roadmap,
  counter: counter
})
