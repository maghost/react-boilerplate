const TITLE_DEFAULT = 'React Boilerplate 1.0.0'

interface Action {
  type: object
}

export default function title(state = TITLE_DEFAULT, action: Action) {
  switch(action.type) {
    default:
      return state
  }
}
