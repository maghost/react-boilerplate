const COUNTER_VALUE = 0

interface Action {
  type: object
}

export default function counter(state = COUNTER_VALUE, action: Action) {
  switch(action.type) {
    default:
      return state
  }
}
