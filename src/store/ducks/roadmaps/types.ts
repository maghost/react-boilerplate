/**
 * Action types
 */
enum RoadmapsTypes {
  LOAD_REQUEST = '@roadmaps/LOAD_REQUEST',
  LOAD_SUCCESS = '@roadmaps/LOAD_SUCCESS',
  LOAD_FAILURE = '@roadmaps/LOAD_FAILURE'
}

/**
 * Data types
 */
interface Roadmap {
  id: number,
  name: string
}

/**
 * State types
 */
interface RoadmapsState {
  readonly data: Roadmap[]
  readonly loading: boolean
  readonly error: boolean
}

export {
  RoadmapsTypes,
  Roadmap,
  RoadmapsState
}
