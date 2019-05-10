import { action } from 'typesafe-actions'
import { RoadmapsTypes, Roadmap } from './types'

export const loadRequest = () => action(RoadmapsTypes.LOAD_REQUEST)
export const loadSuccess = (data: Roadmap[]) => action(RoadmapsTypes.LOAD_SUCCESS, data)
export const loadFailure = () => action(RoadmapsTypes.LOAD_FAILURE)
