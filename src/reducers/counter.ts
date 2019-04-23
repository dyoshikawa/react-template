import { Action } from 'redux'

type CounterActionType = 'INCREMENT' | 'DECREMENT'
type CounterAction = Action<CounterActionType>

const initialState = {
  count: 1,
}

export default function counter(state = initialState, action: CounterAction) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 }
    case 'DECREMENT':
      return { count: state.count - 1 }
    default:
      return state
  }
}
