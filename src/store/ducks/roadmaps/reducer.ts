import { Reducer } from 'redux';
import { RoadmapsState, RoadmapsTypes } from './types'

const INITIAL_STATE: RoadmapsState = {
  data: [
    { id: 1, name: 'Roadmap A' },
    { id: 2, name: 'Roadmap B' }
  ],
  error: false,
  loading: false
}

const reducer: Reducer<RoadmapsState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RoadmapsTypes.LOAD_REQUEST:
      return {
        ...state,
        loading: true
      }

    case RoadmapsTypes.LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload
      }

    case RoadmapsTypes.LOAD_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        data: []
      }

    default:
      return state
  }
}

export {
  reducer
}
