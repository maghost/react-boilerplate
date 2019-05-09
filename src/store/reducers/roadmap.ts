const ROADMAP_ITEMS = [
  { id:1, roadmap: 'Roadmap Item'}
]

interface Action {
  type: string
}

export default function roadmap(state = ROADMAP_ITEMS, action: Action) {
  switch(action.type) {
    default:
      return state
  }
}
