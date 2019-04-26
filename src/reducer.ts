import { combineReducers } from 'redux'
import counter from './reducers/counter'
import tasks from './reducers/tasks'

export type RootState = {
  counter: {
    count: number
  }

  tasks: {
    tasks: Array<string>
  }
}

const reducer = combineReducers({
  counter,
  tasks,
})

export default reducer
